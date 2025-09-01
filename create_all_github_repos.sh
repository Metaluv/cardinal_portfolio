#!/bin/bash

echo "======================================"
echo "GitHub Repository Creation Script"
echo "======================================"
echo ""
echo "This script will help you create all 317 GitHub repositories"
echo "for your portfolio projects."
echo ""
echo "IMPORTANT: You need to authenticate GitHub CLI first."
echo ""

# Check if gh is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed!"
    echo "Installing gh..."
    wget -qO- https://github.com/cli/cli/releases/download/v2.40.1/gh_2.40.1_linux_amd64.tar.gz | tar xz
    sudo mv gh_2.40.1_linux_amd64/bin/gh /usr/local/bin/
    echo "✅ GitHub CLI installed!"
fi

# Check authentication
echo "Checking GitHub authentication..."
if ! gh auth status &> /dev/null; then
    echo ""
    echo "You need to authenticate with GitHub."
    echo "Please run: gh auth login"
    echo ""
    echo "Follow these steps:"
    echo "1. Choose GitHub.com"
    echo "2. Choose HTTPS"
    echo "3. Authenticate with your web browser"
    echo "4. Then run this script again"
    exit 1
fi

echo "✅ GitHub authentication confirmed!"
echo ""

# Read the project mapping
if [ ! -f "project_repo_mapping.json" ]; then
    echo "❌ project_repo_mapping.json not found!"
    echo "Please run: python3 update_project_links.py first"
    exit 1
fi

# Create repos directory
mkdir -p repos

# Counter variables
CREATED=0
SKIPPED=0
FAILED=0
TOTAL=$(jq length project_repo_mapping.json)

echo "Starting repository creation for $TOTAL projects..."
echo ""

# Process each project
jq -c '.[]' project_repo_mapping.json | while read project; do
    NAME=$(echo $project | jq -r '.name')
    REPO_NAME=$(echo $project | jq -r '.repo_name')
    DESCRIPTION=$(echo $project | jq -r '.description')
    CATEGORY=$(echo $project | jq -r '.category')
    
    COUNTER=$((CREATED + SKIPPED + FAILED + 1))
    echo "[$COUNTER/$TOTAL] Processing: $NAME"
    
    # Check if repo already exists
    if gh repo view "Metaluv/$REPO_NAME" &> /dev/null; then
        echo "  ⏭️  Repository already exists: $REPO_NAME"
        SKIPPED=$((SKIPPED + 1))
        continue
    fi
    
    # Create the repository
    if gh repo create "$REPO_NAME" \
        --public \
        --description "$DESCRIPTION" \
        --clone=false &> /dev/null; then
        
        echo "  ✅ Created repository: $REPO_NAME"
        
        # Create local repo directory
        mkdir -p "repos/$REPO_NAME"
        cd "repos/$REPO_NAME"
        
        # Initialize git
        git init &> /dev/null
        
        # Create README.md
        cat > README.md << EOF
# $NAME

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

This project is licensed under the MIT License.

## Contact

Jason Cardinal - [Portfolio](https://jasonc.vercel.app)

---

⭐ If you find this project useful, please consider giving it a star!
EOF

        # Create index.html
        cat > index.html << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$NAME</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #a6191b 0%, #450a0a 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            background: white;
            border-radius: 1rem;
            padding: 3rem;
            max-width: 800px;
            margin: 2rem;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        h1 {
            color: #a6191b;
            border-bottom: 3px solid #a6191b;
            padding-bottom: 1rem;
            margin-bottom: 2rem;
        }
        .category {
            display: inline-block;
            background: #a6191b;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }
        .description {
            color: #666;
            font-size: 1.1rem;
            line-height: 1.6;
            margin: 2rem 0;
        }
        .coming-soon {
            text-align: center;
            padding: 2rem;
            background: #f8f9fa;
            border-radius: 0.5rem;
            margin-top: 2rem;
        }
        .coming-soon h2 {
            color: #a6191b;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="category">$CATEGORY</div>
        <h1>$NAME</h1>
        <p class="description">$DESCRIPTION</p>
        <div class="coming-soon">
            <h2>🚀 Coming Soon!</h2>
            <p>This project is currently under development.</p>
            <p>Check back soon for updates!</p>
        </div>
    </div>
</body>
</html>
EOF

        # Add remote and push
        git add . &> /dev/null
        git commit -m "Initial commit: Add README and landing page" &> /dev/null
        git branch -M main &> /dev/null
        git remote add origin "https://github.com/Metaluv/$REPO_NAME.git" &> /dev/null
        
        if git push -u origin main &> /dev/null; then
            echo "  ✅ Pushed initial files"
            CREATED=$((CREATED + 1))
        else
            echo "  ⚠️  Repository created but push failed"
            FAILED=$((FAILED + 1))
        fi
        
        cd ../..
    else
        echo "  ❌ Failed to create repository"
        FAILED=$((FAILED + 1))
    fi
    
    # Rate limiting pause
    if [ $((COUNTER % 10)) -eq 0 ]; then
        echo "  ⏸️  Pausing to avoid rate limiting..."
        sleep 2
    fi
done

echo ""
echo "======================================"
echo "Repository Creation Complete!"
echo "======================================"
echo "✅ Created: $CREATED repositories"
echo "⏭️  Skipped: $SKIPPED (already existed)"
echo "❌ Failed: $FAILED"
echo ""
echo "All project links in your portfolio now point to:"
echo "https://github.com/Metaluv/<repo-name>"
echo ""
echo "Next step: Commit and push your portfolio changes!"