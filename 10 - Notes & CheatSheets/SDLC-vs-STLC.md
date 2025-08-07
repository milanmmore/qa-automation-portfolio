# 🔄 SDLC vs STLC CheatSheet

<div align="center">

![SDLC](https://img.shields.io/badge/SDLC-Software%20Development-blue?style=flat)
![STLC](https://img.shields.io/badge/STLC-Software%20Testing-green?style=flat)
![Comparison](https://img.shields.io/badge/Comparison-Side%20by%20Side-orange?style=flat)

**Understanding the Relationship Between Development & Testing Lifecycles**

</div>

---

## 📊 Overview Comparison

| Aspect | SDLC | STLC |
|--------|------|------|
| **Full Form** | Software Development Life Cycle | Software Testing Life Cycle |
| **Focus** | Building the software | Validating the software |
| **Timeline** | Entire project duration | Parallel to development |
| **Stakeholders** | Developers, PMs, Business | QA Engineers, Testers |
| **Output** | Working software | Quality assurance |

---

## 🔄 SDLC Phases

### 1. **Requirements Gathering**
- **Goal:** Understand what to build
- **Activities:** Business analysis, stakeholder interviews
- **Deliverables:** SRS, BRD, User stories
- **QA Involvement:** Requirements review, testability analysis

### 2. **Design**
- **Goal:** Plan how to build it
- **Activities:** Architecture design, UI/UX design
- **Deliverables:** Design documents, wireframes, prototypes
- **QA Involvement:** Design review, test strategy planning

### 3. **Development**
- **Goal:** Build the software
- **Activities:** Coding, unit testing, code review
- **Deliverables:** Source code, unit tests
- **QA Involvement:** Test case preparation, test environment setup

### 4. **Testing**
- **Goal:** Validate the software
- **Activities:** Integration, system, acceptance testing
- **Deliverables:** Test results, bug reports
- **QA Involvement:** **Primary responsibility**

### 5. **Deployment**
- **Goal:** Release to production
- **Activities:** Release planning, deployment
- **Deliverables:** Production software
- **QA Involvement:** Production verification, smoke testing

### 6. **Maintenance**
- **Goal:** Keep software running
- **Activities:** Bug fixes, updates, monitoring
- **Deliverables:** Patches, updates
- **QA Involvement:** Regression testing, patch validation

---

## 🧪 STLC Phases

### 1. **Test Planning**
- **Goal:** Plan testing approach
- **Activities:** Test strategy, resource planning, tool selection
- **Deliverables:** Test plan, test strategy document
- **Timeline:** Parallel to requirements gathering

### 2. **Test Analysis**
- **Goal:** Understand what to test
- **Activities:** Requirements analysis, test basis review
- **Deliverables:** Test conditions, test scenarios
- **Timeline:** Parallel to design phase

### 3. **Test Design**
- **Goal:** Create test cases
- **Activities:** Test case writing, test data preparation
- **Deliverables:** Test cases, test data
- **Timeline:** Parallel to development

### 4. **Test Implementation**
- **Goal:** Prepare for execution
- **Activities:** Test environment setup, test automation
- **Deliverables:** Automated scripts, test environment
- **Timeline:** End of development phase

### 5. **Test Execution**
- **Goal:** Execute tests and report results
- **Activities:** Test execution, defect reporting
- **Deliverables:** Test results, defect reports
- **Timeline:** After development completion

### 6. **Test Closure**
- **Goal:** Complete testing activities
- **Activities:** Test completion criteria, lessons learned
- **Deliverables:** Test summary report, metrics
- **Timeline:** After test execution

---

## 🔗 Integration Points

### Early Integration (Shift-Left)
```
Requirements → Test Planning
Design → Test Analysis
Development → Test Design
```

### Parallel Activities
```
Development ←→ Test Preparation
Code Review ←→ Test Case Review
Unit Testing ←→ Integration Test Planning
```

### Late Integration (Traditional)
```
Development Complete → Testing Starts
```

---

## 📈 Modern Approaches

### Agile SDLC + STLC
```
Sprint Planning → Test Planning
Sprint Development → Test Case Creation
Sprint Testing → Test Execution
Sprint Review → Test Closure
```

### DevOps Integration
```
Development → Automated Testing → Deployment
Continuous Integration → Continuous Testing → Continuous Deployment
```

---

## 🎯 Key Differences

| Characteristic | SDLC | STLC |
|----------------|------|------|
| **Primary Goal** | Build working software | Ensure software quality |
| **Main Activities** | Coding, designing, building | Testing, validating, reporting |
| **Success Criteria** | Software meets requirements | Software is defect-free |
| **Tools Used** | IDEs, compilers, build tools | Testing tools, automation frameworks |
| **Team Roles** | Developers, architects, designers | Testers, QA engineers, automation engineers |
| **Deliverables** | Source code, executables, documentation | Test cases, test results, bug reports |

---

## 🔄 Overlapping Activities

### Requirements Phase
- **SDLC:** Gather and document requirements
- **STLC:** Review requirements for testability
- **Overlap:** Requirements validation

### Design Phase
- **SDLC:** Create system design
- **STLC:** Plan test strategy
- **Overlap:** Design review and validation

### Development Phase
- **SDLC:** Write code and unit tests
- **STLC:** Prepare test cases and environment
- **Overlap:** Code review and test case preparation

### Testing Phase
- **SDLC:** Support testing activities
- **STLC:** Execute tests and report defects
- **Overlap:** Defect resolution and retesting

---

## 📊 Metrics & KPIs

### SDLC Metrics
- **Code Coverage:** Percentage of code tested
- **Build Success Rate:** Successful builds vs total builds
- **Development Velocity:** Story points completed per sprint
- **Technical Debt:** Code quality metrics

### STLC Metrics
- **Test Coverage:** Requirements/test cases covered
- **Defect Density:** Defects per KLOC
- **Test Execution Rate:** Tests executed vs planned
- **Defect Leakage:** Defects found in production

---

## 🚀 Best Practices

### SDLC Best Practices
- **Agile methodology** for flexibility
- **Continuous integration** for early feedback
- **Code reviews** for quality assurance
- **Automated builds** for consistency

### STLC Best Practices
- **Early testing** (shift-left approach)
- **Test automation** for efficiency
- **Risk-based testing** for prioritization
- **Continuous testing** in CI/CD pipeline

### Integration Best Practices
- **Parallel development and testing**
- **Shared tools and environments**
- **Regular communication** between teams
- **Automated quality gates**

---

<div align="center">
  <i>Part of <a href="https://github.com/Yasin-asif/SQA-Professional-Portfolio">Muhammad Yasin's SQA Professional Portfolio</a></i>
</div> 