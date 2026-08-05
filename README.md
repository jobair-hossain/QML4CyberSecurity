# Quantum Machine Learning for Cybersecurity Repository

An open, student-friendly learning repository connecting quantum machine learning (QML) with authentic cybersecurity problems.

The website contains ten research-informed modules. Every module has four routes:

- Module overview
- Pre-Lab
- Hands-on Lab
- Post-Lab

Module 1, **Quantum Support Vector Machine for Malware Family Classification**, is fully developed. Modules 2-10 contain structured instructional blueprints for future notebook, dataset, and assessment development.

## Live website

After GitHub Pages is enabled, the public website is available at:

```text
https://jobair-hossain.github.io/QML4CyberSecurity/
```

## Included modules

1. QSVM for Malware Family Classification
2. Quantum Classifiers for Software Supply-Chain Risk
3. QCNN for Zero-Day Network Intrusion Detection
4. VQC for Phishing and Malicious URL Detection
5. QKNN for IoT Attack Detection
6. QNN for AI Model Poisoning Detection
7. QGAN for Adversarial Attack Detection
8. Hybrid Quantum Learning for Deepfake Detection
9. Quantum Kernels for Post-Quantum Cryptography Migration Risk
10. Quantum Graph Learning for Blockchain Fraud

## Module 1 resources

Module 1 includes:

- A complete conceptual Pre-Lab
- A guided Google Colab workflow
- Classical RBF-SVM and QSVC comparisons
- Quantum feature-map and fidelity-kernel explanations
- Student progress tracking in browser storage
- Experimental extensions and troubleshooting
- Submission requirements and a 20-point rubric
- `public/downloads/QSVM_Malware_Family_Classification.ipynb`

The notebook expects an instructor-provided archive named `Dynamic Data for Malware Family Classification.zip`. Only prepared feature data should be used; students should not upload or execute live malware.

## Technology

- React 19
- Next.js 16
- TypeScript
- Tailwind CSS 4
- Static export for GitHub Pages

## Requirements

- Node.js 22.13 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local address displayed in the terminal.

## Validate the project

Validate the complete static GitHub Pages build:

```bash
npm run test:pages
```

The application provides 42 routes: the home page, module catalog, ten module overview pages, and thirty learning-stage pages.

## Publish with GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`. It builds, validates, and publishes the complete static website whenever a commit is pushed to `main`.

To enable the first deployment:

1. Open the repository on GitHub.
2. Select **Settings**.
3. Select **Pages** under **Code and automation**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Open the **Actions** tab and run **Deploy QML for Cybersecurity to GitHub Pages**, or push a new commit to `main`.

The generated static website is written to `out/`. All application and asset links are prefixed for the `QML4CyberSecurity` project path.

## Deployment architecture

The `npm run build:pages` command creates the static export used by GitHub Pages.

The GitHub Pages deployment contains no server-side authentication or database requirement. Student progress is stored locally in the browser, and the Module 1 notebook is served as a static download.

## Project leadership

The repository is led by the University of Central Arkansas and designed for collaboration with the University of Arkansas at Little Rock and Tennessee State University.
