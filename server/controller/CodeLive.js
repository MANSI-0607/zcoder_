const fs = require("fs");
const { exec } = require("child_process");

async function handleCodeLive(req, res) {
    const { code, input } = req.body;

    // Check if code is provided
    if (!code) {
        return res.status(400).json({ error: "No C++ code provided" });
    }

    try {
        // Save the C++ code to a file
        fs.writeFileSync("code.cpp", code);

        // Write input to a file (if provided)
        if (input) {
            fs.writeFileSync("input.txt", input);
        }

        // Compile and run the C++ code with input
        const command = input ? `code.exe < input.txt` : `code.exe`;
        exec(`g++ code.cpp -o code.exe && ${command}`, (error, stdout, stderr) => {
            if (error) {
                console.error("Compilation or runtime error:", stderr);
                res.status(400).json({ error: stderr });
            } else {
                console.log("C++ code executed successfully");
                res.json({ output: stdout });
            }

            // Cleanup: Delete temporary files
            fs.unlinkSync("code.cpp");
            if (input) {
                fs.unlinkSync("input.txt");
            }
        });
    } catch (err) {
        console.error("Error saving C++ code:", err);
        res.status(500).json({ error: "Failed to save C++ code" });
    }
}

module.exports = {
    handleCodeLive,
};
