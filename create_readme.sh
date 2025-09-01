#!/bin/bash
# Script to create README for a project repository

REPO_NAME="$1"
PROJECT_NAME="$2"
DESCRIPTION="$3"
CATEGORY="$4"

if [ -z "$REPO_NAME" ]; then
    echo "Usage: ./create_readme.sh <repo_name> <project_name> <description> <category>"
    exit 1
fi

# Create repository directory
mkdir -p "repos/$REPO_NAME"
cd "repos/$REPO_NAME"

# Initialize git repo
git init

# Create README.md
cat > README.md << EOF
# $PROJECT_NAME

$DESCRIPTION

## Overview

This is a $CATEGORY project that showcases innovative solutions and modern development practices.

## Features

- Modern, responsive design
- Optimized performance
- SEO-friendly architecture
- Accessibility compliant
- Cross-browser compatibility

## Technologies

- HTML5 / CSS3
- JavaScript / TypeScript
- React / Next.js
- Tailwind CSS
- Node.js

## Getting Started

\`\`\`bash
git clone https://github.com/Metaluv/$REPO_NAME.git
cd $REPO_NAME
npm install
npm run dev
\`\`\`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Jason Cardinal - [Portfolio](https://jasonc.vercel.app)

## Acknowledgments

- Built with passion for $CATEGORY innovation
- Inspired by real-world challenges
- Committed to continuous improvement

---

⭐ If you find this project useful, please consider giving it a star!
EOF

# Create a simple index.html
cat > index.html << 'HTML'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Self Replicating Robot</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        .container {
            background: white;
            border-radius: 1rem;
            padding: 3rem;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        h1 {
            color: #333;
            border-bottom: 3px solid #667eea;
            padding-bottom: 1rem;
        }
        .coming-soon {
            text-align: center;
            padding: 3rem;
            background: #f8f9fa;
            border-radius: 0.5rem;
            margin-top: 2rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Self Replicating Robot</h1>
        <p>Von Neumann probe concept with autonomous reproduction and evolution.</p>
        <div class="coming-soon">
            <h2>🚀 Coming Soon!</h2>
            <p>This project is currently under development. Check back soon for updates!</p>
        </div>
    </div>
</body>
</html>
HTML

echo "✅ Created README and index.html for $REPO_NAME"
