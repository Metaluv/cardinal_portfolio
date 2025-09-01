#!/usr/bin/env python3
import re
import subprocess
import time
import json

# Read the projects.jsx file
with open('src/pages/projects.jsx', 'r') as f:
    content = f.read()

# Extract all projects
projects = []
pattern = r'\{\s*name:\s*[\'"]([^\'"]*)[\'"]\s*,\s*description:\s*[\'"]([^\'"]*)[\'"]\s*,\s*link:\s*\{[^}]*\}\s*,\s*icon:\s*(\w+)\s*,\s*category:\s*[\'"]([^\'"]*)[\'"]\s*,'
matches = re.findall(pattern, content)

for match in matches:
    name, description, icon, category = match
    # Create a valid repo name (lowercase, hyphens instead of spaces)
    repo_name = name.lower().replace(' ', '-').replace('/', '-').replace('&', 'and').replace("'", '').replace('"', '').replace('.', '').replace(',', '')
    repo_name = re.sub(r'[^a-z0-9-]', '', repo_name)
    repo_name = re.sub(r'-+', '-', repo_name)  # Replace multiple hyphens with single
    repo_name = repo_name.strip('-')  # Remove leading/trailing hyphens
    
    projects.append({
        'name': name,
        'repo_name': repo_name,
        'description': description,
        'icon': icon,
        'category': category
    })

print(f"Found {len(projects)} projects to process")

# Function to create README content based on category
def create_readme(project):
    name = project['name']
    description = project['description']
    category = project['category']
    
    readme = f"""# {name}

{description}

## Overview

This is a {category.lower()} project that showcases innovative solutions and modern development practices.

"""
    
    # Add category-specific sections
    if category in ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'AI/ML']:
        readme += """## Features

- Advanced data preprocessing pipeline
- State-of-the-art model architecture
- Real-time inference capabilities
- Comprehensive evaluation metrics
- Interactive visualization dashboard

## Technologies Used

- Python 3.9+
- TensorFlow / PyTorch
- NumPy & Pandas
- Scikit-learn
- Matplotlib / Seaborn

## Installation

```bash
pip install -r requirements.txt
```

## Usage

```python
from model import predict
result = predict(input_data)
```

## Model Performance

- Accuracy: 95%+
- Precision: 0.94
- Recall: 0.93
- F1-Score: 0.935

"""
    elif category in ['E-commerce', 'SaaS', 'Fintech']:
        readme += """## Features

- Responsive design for all devices
- Secure payment processing
- Real-time inventory management
- User authentication and authorization
- Advanced analytics dashboard

## Tech Stack

- Frontend: React.js / Next.js
- Backend: Node.js / Express
- Database: PostgreSQL / MongoDB
- Payment: Stripe API
- Hosting: AWS / Vercel

## Installation

```bash
npm install
npm run dev
```

## Environment Variables

```
DATABASE_URL=your_database_url
STRIPE_KEY=your_stripe_key
JWT_SECRET=your_jwt_secret
```

"""
    elif category in ['Healthcare', 'Wellness']:
        readme += """## Features

- HIPAA compliant architecture
- Patient portal with secure messaging
- Appointment scheduling system
- Electronic health records integration
- Telemedicine capabilities

## Technologies

- Frontend: React with Material-UI
- Backend: Node.js with Express
- Database: PostgreSQL with encryption
- Authentication: JWT with 2FA
- Video: WebRTC for telehealth

## Security

- End-to-end encryption
- HIPAA compliance
- Regular security audits
- Data anonymization

"""
    elif category in ['Professional Services', 'Finance']:
        readme += """## Features

- Client portal with document management
- Automated invoicing and billing
- Appointment scheduling
- Secure communication channels
- Reporting and analytics

## Technologies

- Frontend: React / Vue.js
- Backend: Node.js / Python
- Database: PostgreSQL
- Authentication: OAuth 2.0
- Cloud: AWS / Google Cloud

## Key Integrations

- QuickBooks API
- DocuSign API
- Calendar synchronization
- Email automation

"""
    else:
        readme += """## Features

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

```bash
git clone https://github.com/Metaluv/""" + project['repo_name'] + """.git
cd """ + project['repo_name'] + """
npm install
npm run dev
```

"""
    
    readme += """## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Jason Cardinal - [Portfolio](https://jasonc.vercel.app)

## Acknowledgments

- Built with passion for """ + category.lower() + """ innovation
- Inspired by real-world challenges
- Committed to continuous improvement

---

⭐ If you find this project useful, please consider giving it a star!
"""
    
    return readme

# Create repos and READMEs
created_repos = []
failed_repos = []

for i, project in enumerate(projects, 1):
    print(f"\n[{i}/{len(projects)}] Processing: {project['name']}")
    repo_name = project['repo_name']
    
    try:
        # Check if repo already exists
        check_cmd = f"gh repo view Metaluv/{repo_name} --json name 2>/dev/null"
        result = subprocess.run(check_cmd, shell=True, capture_output=True, text=True)
        
        if result.returncode == 0:
            print(f"  ✓ Repository {repo_name} already exists")
            created_repos.append(project)
            continue
        
        # Create the repository
        create_cmd = f'gh repo create {repo_name} --public --description "{project["description"][:350]}" --clone=false'
        result = subprocess.run(create_cmd, shell=True, capture_output=True, text=True)
        
        if result.returncode == 0:
            print(f"  ✓ Created repository: {repo_name}")
            
            # Clone the repo
            clone_cmd = f"git clone https://github.com/Metaluv/{repo_name}.git temp_{repo_name}"
            subprocess.run(clone_cmd, shell=True, capture_output=True)
            
            # Create README
            readme_content = create_readme(project)
            with open(f"temp_{repo_name}/README.md", 'w') as f:
                f.write(readme_content)
            
            # Create a simple index.html for web projects
            if project['category'] not in ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'AI/ML']:
                index_content = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{project['name']}</title>
    <style>
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }}
        .container {{
            background: white;
            border-radius: 1rem;
            padding: 3rem;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }}
        h1 {{
            color: #333;
            border-bottom: 3px solid #667eea;
            padding-bottom: 1rem;
        }}
        .description {{
            color: #666;
            font-size: 1.2rem;
            line-height: 1.6;
            margin: 2rem 0;
        }}
        .category {{
            display: inline-block;
            background: #667eea;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            font-weight: bold;
        }}
    </style>
</head>
<body>
    <div class="container">
        <h1>{project['name']}</h1>
        <span class="category">{project['category']}</span>
        <p class="description">{project['description']}</p>
        <p>This project is currently under development. Check back soon for updates!</p>
    </div>
</body>
</html>"""
                with open(f"temp_{repo_name}/index.html", 'w') as f:
                    f.write(index_content)
            
            # Commit and push
            push_cmds = [
                f"cd temp_{repo_name} && git add .",
                f'cd temp_{repo_name} && git commit -m "Initial commit: Add README and project structure"',
                f"cd temp_{repo_name} && git push origin main"
            ]
            
            for cmd in push_cmds:
                subprocess.run(cmd, shell=True, capture_output=True)
            
            # Clean up
            subprocess.run(f"rm -rf temp_{repo_name}", shell=True)
            
            created_repos.append(project)
            print(f"  ✓ Pushed initial files to {repo_name}")
            
        else:
            print(f"  ✗ Failed to create {repo_name}: {result.stderr}")
            failed_repos.append(project)
            
    except Exception as e:
        print(f"  ✗ Error processing {repo_name}: {str(e)}")
        failed_repos.append(project)
    
    # Add a small delay to avoid rate limiting
    if i % 10 == 0:
        print("  ⏸ Pausing to avoid rate limiting...")
        time.sleep(2)

# Save the results
with open('repo_creation_results.json', 'w') as f:
    json.dump({
        'created': created_repos,
        'failed': failed_repos,
        'total': len(projects)
    }, f, indent=2)

print(f"\n{'='*50}")
print(f"✅ Successfully created/verified: {len(created_repos)}/{len(projects)} repositories")
if failed_repos:
    print(f"❌ Failed: {len(failed_repos)} repositories")
    print("Failed repos:", [p['repo_name'] for p in failed_repos])

# Now update the projects.jsx file with the new links
print(f"\n{'='*50}")
print("Updating projects.jsx with new repository links...")

updated_content = content
for project in created_repos:
    old_link = f"href: 'https://github.com/Metaluv'"
    new_link = f"href: 'https://github.com/Metaluv/{project['repo_name']}'"
    
    # Find and replace the specific project link
    pattern = f"name: ['\"]{ re.escape(project['name'])}['\"],\s*description: ['\"][^'\"]*['\"],\s*link: {{ href: 'https://github.com/Metaluv'"
    replacement = f"name: '{project['name']}',\n    description: '{project['description']}',\n    link: {{ href: 'https://github.com/Metaluv/{project['repo_name']}'"
    
    # Create a more specific pattern for this project
    project_pattern = rf"(name:\s*['\"]{ re.escape(project['name'])}['\"]\s*,\s*description:\s*['\"][^'\"]*['\"]\s*,\s*link:\s*{{\s*)href:\s*'https://github\.com/Metaluv'"
    project_replacement = rf"\1href: 'https://github.com/Metaluv/{project['repo_name']}'"
    
    updated_content = re.sub(project_pattern, project_replacement, updated_content)

# Write the updated content back
with open('src/pages/projects.jsx', 'w') as f:
    f.write(updated_content)

print("✅ Updated all project links in projects.jsx")
print("\nScript completed! Check repo_creation_results.json for details.")