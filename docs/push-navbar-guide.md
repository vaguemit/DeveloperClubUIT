# Pushing Navbar Component to GitHub

1. **Initialize Git** (if not already done):
```bash
cd /c:/Users/Mit/DCUIT
git init
```

2. **Create .gitignore** (if not exists):
```bash
node_modules/
.next/
.env
.env.local
```

3. **Stage your changes**:
```bash
git add components/navbar.tsx
```

4. **Commit your changes**:
```bash
git commit -m "Add responsive navbar component with logos"
```

5. **Link to GitHub repository** (if not already done):
```bash
git remote add origin <your-github-repo-url>
# Example: git remote add origin https://github.com/yourusername/DCUIT.git
```

6. **Push to GitHub**:
```bash
# If this is your first push:
git branch -M main
git push -u origin main

# For subsequent pushes:
git push origin main
```

Note: Make sure you have:
- Created a GitHub repository
- Configured Git with your credentials
- Have proper access rights to the repository
