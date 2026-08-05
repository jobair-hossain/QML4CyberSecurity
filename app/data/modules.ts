export type LearningPhase = "pre-lab" | "hands-on-lab" | "post-lab";

export type Module = {
  id: string; number: number; title: string; challenge: string; method: string; methodShort: string;
  datasets: string[]; focus: string; workforce: string; status: "available" | "planned";
  level: string; duration: string; summary: string; learningOutcomes: string[];
  preTopics: string[]; labSteps: string[]; extensions: string[];
};

export const modules: Module[] = [
  {
    id: "m1", number: 1, title: "QSVM for Malware Family Classification", challenge: "Malware Family Classification",
    method: "Quantum Support Vector Machine (QSVM)", methodShort: "QSVM",
    datasets: ["Dynamic CAPA feature dataset", "Microsoft Malware Dataset", "EMBER"],
    focus: "Build and evaluate a QML malware classifier, then compare quantum and classical approaches.",
    workforce: "AI-assisted malware analysis and cyber defense", status: "available", level: "Upper undergraduate / Graduate", duration: "3-4 hours",
    summary: "Transform behavioral malware features into a compact quantum representation, construct a fidelity-based quantum kernel, and test whether QSVC adds value beyond strong classical baselines.",
    learningOutcomes: ["Explain the role of quantum machine learning in a malware-analysis workflow.", "Describe quantum feature maps, fidelity kernels, and the QSVC decision process.", "Prepare classical malware features for angle-based quantum encoding.", "Implement and evaluate QSVC in a cloud-hosted Google Colab notebook.", "Compare quantum and classical models without overstating quantum advantage."],
    preTopics: ["Malware families and dynamic behavioral features", "Support vector machines, kernels, and decision boundaries", "Qubits, angle encoding, ZZFeatureMap, and fidelity"],
    labSteps: ["Inspect and balance the dynamic CAPA feature data", "Remove metadata, scale features, and reduce dimension with PCA", "Train a classical RBF-SVM baseline", "Construct a ZZFeatureMap and FidelityQuantumKernel", "Fit QSVC, visualize confusion matrices, and inspect the kernel matrix"],
    extensions: ["Change the number of classes, samples, and qubits", "Compare alternative feature maps and circuit configurations", "Benchmark against logistic regression and random forest", "Design a small simulator-versus-hardware kernel experiment"],
  },
  {
    id: "m2", number: 2, title: "Quantum Classifiers for Software Supply-Chain Risk", challenge: "Software Supply-Chain Vulnerability Detection",
    method: "Quantum Decision Tree and Hybrid Quantum Classifiers", methodShort: "QDT + Hybrid",
    datasets: ["SATE IV", "Juliet Test Suite", "GitHub vulnerability datasets"],
    focus: "Identify vulnerable software dependencies and evaluate secure software supply-chain workflows.", workforce: "Secure software engineering and DevSecOps", status: "planned", level: "Upper undergraduate / Graduate", duration: "3-4 hours",
    summary: "Model dependency and code-level risk signals with quantum decision structures and hybrid classifiers while preserving an auditable secure-development workflow.",
    learningOutcomes: ["Recognize software supply-chain attack surfaces.", "Build features from dependency and vulnerability evidence.", "Evaluate hybrid classifiers against classical tree baselines.", "Interpret false negatives in a DevSecOps context."],
    preTopics: ["SBOMs and dependency risk", "Vulnerability labels and leakage", "Quantum decision structures"], labSteps: ["Curate vulnerable and clean samples", "Construct dependency-risk features", "Train classical and hybrid models", "Analyze errors by weakness type"], extensions: ["Test cross-project generalization", "Add provenance features", "Design a CI/CD decision policy"],
  },
  {
    id: "m3", number: 3, title: "QCNN for Zero-Day Network Intrusion Detection", challenge: "Zero-Day Network Intrusion Detection", method: "Quantum Convolutional Neural Network (QCNN)", methodShort: "QCNN", datasets: ["CICIDS2017", "UNSW-NB15"], focus: "Detect previously unseen network attacks and evaluate model robustness.", workforce: "Security operations and network defense", status: "planned", level: "Upper undergraduate / Graduate", duration: "4 hours",
    summary: "Use compact network-flow representations to investigate whether QCNN-style feature extraction can support detection under attack-family shift.", learningOutcomes: ["Describe zero-day evaluation", "Encode flow features for QCNN input", "Measure robustness under family holdout", "Connect errors to SOC triage"], preTopics: ["Network flows and intrusion labels", "Unknown-attack evaluation", "Quantum convolution and pooling"], labSteps: ["Build a family-held-out split", "Reduce and encode flow features", "Train QCNN and classical CNN baselines", "Analyze recall on unseen attacks"], extensions: ["Simulate noisy circuits", "Evaluate threshold calibration", "Create a SOC escalation rule"],
  },
  {
    id: "m4", number: 4, title: "VQC for Phishing and Malicious URL Detection", challenge: "Phishing and Malicious URL Detection", method: "Variational Quantum Classifier (VQC)", methodShort: "VQC", datasets: ["UCI Phishing Dataset", "PhishTank"], focus: "Develop phishing-detection workflows using real-world datasets.", workforce: "Threat intelligence and cyber defense", status: "planned", level: "Upper undergraduate / Graduate", duration: "3 hours",
    summary: "Engineer explainable URL and webpage signals, train a variational quantum classifier, and evaluate the operational cost of false alerts.", learningOutcomes: ["Identify phishing indicators", "Construct a VQC circuit", "Track optimizer behavior", "Evaluate precision-recall tradeoffs"], preTopics: ["Phishing indicators", "Parameterized quantum circuits", "Loss functions and optimizers"], labSteps: ["Profile phishing features", "Prepare angle-encoded vectors", "Train VQC and logistic baseline", "Review high-confidence errors"], extensions: ["Compare optimizers", "Test temporal drift", "Design an analyst explanation card"],
  },
  {
    id: "m5", number: 5, title: "QKNN for IoT Attack Detection", challenge: "IoT and Smart Infrastructure Attack Detection", method: "Quantum k-Nearest Neighbor (QKNN)", methodShort: "QKNN", datasets: ["IoT-23", "TON_IoT"], focus: "Detect anomalous behavior in IoT and cyber-physical systems.", workforce: "Critical infrastructure protection", status: "planned", level: "Upper undergraduate / Graduate", duration: "3-4 hours",
    summary: "Compare classical and quantum-inspired distance measures for constrained-device traffic and examine tradeoffs in critical-infrastructure monitoring.", learningOutcomes: ["Describe IoT attack telemetry", "Explain similarity-based classification", "Implement a QKNN workflow", "Assess latency and safety tradeoffs"], preTopics: ["IoT telemetry", "Nearest-neighbor methods", "Quantum state similarity"], labSteps: ["Select device-aware features", "Build balanced attack subsets", "Run KNN and QKNN variants", "Analyze device-level errors"], extensions: ["Test unseen devices", "Vary neighborhood size", "Create a critical-alert policy"],
  },
  {
    id: "m6", number: 6, title: "QNN for AI Model Poisoning Detection", challenge: "AI Model Poisoning Detection", method: "Quantum Neural Network (QNN)", methodShort: "QNN", datasets: ["TrojAI Dataset", "Poisoned CIFAR variants"], focus: "Investigate AI model integrity and trustworthy machine learning.", workforce: "Trustworthy AI and secure machine learning", status: "planned", level: "Graduate / Advanced undergraduate", duration: "4 hours",
    summary: "Detect poisoning signals in learned representations with a hybrid QNN and connect model behavior to integrity controls across the ML lifecycle.", learningOutcomes: ["Differentiate poisoning and evasion", "Extract integrity signals", "Train a hybrid QNN detector", "Evaluate trigger-aware robustness"], preTopics: ["Data and model poisoning", "Backdoor triggers", "Hybrid quantum neural networks"], labSteps: ["Inspect clean and poisoned models", "Extract compact signatures", "Train QNN and MLP baselines", "Stress-test unseen triggers"], extensions: ["Change poison rates", "Add uncertainty estimates", "Draft a model-acceptance checklist"],
  },
  {
    id: "m7", number: 7, title: "QGAN for Adversarial Attack Detection", challenge: "Adversarial Attack Detection for AI Systems", method: "Quantum Generative Adversarial Network (QGAN)", methodShort: "QGAN", datasets: ["Adversarial MNIST", "Adversarial CIFAR"], focus: "Analyze adversarial attacks and evaluate robustness strategies.", workforce: "AI security and adversarial machine learning", status: "planned", level: "Graduate / Advanced undergraduate", duration: "4 hours",
    summary: "Use generative modeling to study the boundary between benign and adversarial inputs while measuring whether detection generalizes across attacks.", learningOutcomes: ["Explain adversarial examples", "Describe a QGAN workflow", "Measure cross-attack detection", "Discuss dual-use risks"], preTopics: ["Evasion attacks", "Generative adversarial learning", "Quantum generators"], labSteps: ["Create or load adversarial variants", "Train compact representations", "Fit detection models", "Evaluate across attack types"], extensions: ["Vary perturbation budgets", "Compare defenses", "Complete a dual-use risk review"],
  },
  {
    id: "m8", number: 8, title: "Hybrid Quantum Learning for Deepfake Detection", challenge: "Deepfake and Identity Spoofing Detection", method: "Hybrid Quantum Deep Learning", methodShort: "Hybrid QDL", datasets: ["FaceForensics++", "DFDC Dataset"], focus: "Detect AI-generated identity spoofing using hybrid Quantum-AI methods.", workforce: "Digital identity protection and cyber forensics", status: "planned", level: "Graduate / Advanced undergraduate", duration: "4 hours",
    summary: "Combine classical visual embeddings with a compact quantum classifier to detect manipulated identity media and reason about demographic and compression shifts.", learningOutcomes: ["Recognize deepfake evidence", "Build a hybrid feature pipeline", "Evaluate cross-dataset generalization", "Document forensic limitations"], preTopics: ["Identity spoofing", "Visual embeddings", "Hybrid quantum-classical layers"], labSteps: ["Sample authentic and manipulated frames", "Extract embeddings", "Train hybrid and classical heads", "Test compression robustness"], extensions: ["Audit subgroup performance", "Test unseen generators", "Write a forensic caveat statement"],
  },
  {
    id: "m9", number: 9, title: "Quantum Kernels for PQC Migration Risk", challenge: "Post-Quantum Cryptography Migration Risk Analysis", method: "Quantum Kernel Methods and Hybrid Models", methodShort: "Q-Kernel + Hybrid", datasets: ["NIST PQC benchmark datasets"], focus: "Assess cryptographic migration strategies and quantum-safe communication.", workforce: "Post-quantum cybersecurity and risk assessment", status: "planned", level: "Graduate / Advanced undergraduate", duration: "3-4 hours",
    summary: "Translate asset, protocol, and implementation evidence into a migration-risk model while separating QML experimentation from cryptographic security claims.", learningOutcomes: ["Explain harvest-now-decrypt-later risk", "Construct migration features", "Apply a quantum kernel model", "Prioritize systems transparently"], preTopics: ["PQC migration", "Cryptographic inventories", "Kernel-based risk ranking"], labSteps: ["Create an asset-risk table", "Encode migration constraints", "Train ranking or classification models", "Produce a prioritized roadmap"], extensions: ["Vary risk assumptions", "Compare organizations", "Add uncertainty and governance controls"],
  },
  {
    id: "m10", number: 10, title: "Quantum Graph Learning for Blockchain Fraud", challenge: "Blockchain Fraud and Financial Crime Detection", method: "Quantum Graph Learning and Hybrid Graph Models", methodShort: "Q-Graph", datasets: ["Elliptic Bitcoin Dataset", "Ethereum transaction graphs"], focus: "Detect fraudulent blockchain transactions using graph-based analytics.", workforce: "Financial cybersecurity and blockchain analytics", status: "planned", level: "Graduate / Advanced undergraduate", duration: "4 hours",
    summary: "Investigate whether quantum-enhanced graph representations can help classify suspicious transactions under extreme class imbalance and evolving typologies.", learningOutcomes: ["Interpret transaction graphs", "Create compact graph features", "Build a hybrid graph classifier", "Evaluate imbalanced detection"], preTopics: ["Blockchain transaction graphs", "Financial-crime labels", "Quantum graph representations"], labSteps: ["Construct temporal graph splits", "Extract node neighborhoods", "Train hybrid and classical graph models", "Review high-risk false positives"], extensions: ["Test temporal drift", "Explore subgraph explanations", "Design an analyst escalation queue"],
  },
];

export const phases: { id: LearningPhase; label: string; short: string }[] = [
  { id: "pre-lab", label: "Pre-Lab", short: "Learn" }, { id: "hands-on-lab", label: "Hands-on Lab", short: "Build" }, { id: "post-lab", label: "Post-Lab", short: "Extend" },
];
export function getModule(id: string) { return modules.find((module) => module.id === id.toLowerCase()); }
