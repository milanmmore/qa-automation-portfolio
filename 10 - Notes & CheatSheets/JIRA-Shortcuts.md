# 🎫 JIRA Shortcuts & Workflow CheatSheet

<div align="center">

![JIRA](https://img.shields.io/badge/JIRA-Project%20Management-blue?style=flat)
![Shortcuts](https://img.shields.io/badge/Shortcuts-Keyboard%20%26%20Mouse-green?style=flat)
![Workflow](https://img.shields.io/badge/Workflow-Best%20Practices-orange?style=flat)

**Master JIRA for Maximum QA Productivity**

</div>

---

## ⌨️ Keyboard Shortcuts

### Global Shortcuts
| Shortcut | Action | Use Case |
|----------|--------|----------|
| `g + i` | Go to Issues | Quick navigation |
| `g + d` | Go to Dashboard | Return to main view |
| `g + p` | Go to Projects | Switch between projects |
| `g + a` | Go to Agile | Access boards |
| `g + r` | Go to Reports | View project metrics |
| `g + s` | Go to Search | Find issues quickly |
| `?` | Show shortcuts | Help menu |
| `Ctrl/Cmd + k` | Quick search | Find anything |

### Issue Navigation
| Shortcut | Action | Use Case |
|----------|--------|----------|
| `i` | Create issue | New bug/feature |
| `e` | Edit issue | Modify current issue |
| `a` | Assign to me | Take ownership |
| `m` | Move issue | Change project/board |
| `l` | Add labels | Categorize issues |
| `w` | Watch issue | Get notifications |
| `v` | Vote for issue | Support feature request |
| `c` | Comment | Add notes |

### Board & Sprint Management
| Shortcut | Action | Use Case |
|----------|--------|----------|
| `b` | Backlog | View all issues |
| `s` | Sprint | Current sprint view |
| `n` | Next issue | Navigate board |
| `p` | Previous issue | Navigate board |
| `Space` | Start progress | Move to In Progress |
| `r` | Resolve | Mark as done |

---

## 🖱️ Mouse Shortcuts & Tips

### Quick Actions
- **Right-click** on issue → Quick actions menu
- **Drag & drop** issues between columns
- **Double-click** issue → Quick edit
- **Ctrl/Cmd + click** → Open in new tab
- **Shift + click** → Select multiple issues

### Board Navigation
- **Scroll wheel** → Navigate through issues
- **Click column header** → Sort by column
- **Click issue number** → Copy to clipboard
- **Hover over avatar** → Quick user info

---

## 📋 Issue Creation Templates

### Bug Report Template
```
**Summary:** [Clear, concise title]

**Environment:**
- Browser: [Chrome/Firefox/Safari version]
- OS: [Windows/Mac/Linux version]
- URL: [Page where bug occurs]

**Steps to Reproduce:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Expected Result:** [What should happen]
**Actual Result:** [What actually happens]

**Screenshots:** [If applicable]
**Priority:** [High/Medium/Low]
**Severity:** [Critical/Major/Minor]
```

### Test Case Template
```
**Test Case ID:** [TC-001]
**Test Case Title:** [Clear description]

**Preconditions:** [What needs to be set up]
**Test Data:** [Input data required]

**Test Steps:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Expected Result:** [Expected outcome]
**Actual Result:** [Actual outcome]
**Status:** [Pass/Fail/Blocked]
```

---

## 🔄 Workflow Best Practices

### Issue Lifecycle
```
New → In Progress → In Review → Done
   ↓
Reopened ← ← ← ← ← ← ← ← ← ← ← ← ← ←
```

### Status Transitions
| From | To | When | Notes |
|------|----|------|-------|
| **New** | **In Progress** | Work starts | Assign to yourself |
| **In Progress** | **In Review** | Code complete | Request review |
| **In Review** | **Done** | Approved | Ready for testing |
| **Done** | **Reopened** | Issues found | Failed testing |

### Priority Guidelines
- **Critical:** System down, data loss, security breach
- **High:** Major functionality broken, blocking others
- **Medium:** Minor functionality issues, UI problems
- **Low:** Cosmetic issues, nice-to-have features

---

## 📊 JQL (JIRA Query Language)

### Basic Queries
```sql
-- My assigned issues
assignee = currentUser()

-- Issues in current sprint
sprint in openSprints()

-- High priority bugs
priority = High AND type = Bug

-- Issues updated today
updated >= startOfDay()

-- Issues without assignee
assignee is EMPTY

-- Issues with specific labels
labels in ("frontend", "ui")
```

### Advanced Queries
```sql
-- Issues created this week
created >= startOfWeek()

-- Issues resolved this month
resolved >= startOfMonth()

-- Issues with attachments
attachments is not EMPTY

-- Issues with comments
comment ~ "test"

-- Issues in specific project
project = "QA-PROJECT"

-- Issues by component
component = "Login Module"
```

### Useful Filters
```sql
-- My bugs
type = Bug AND assignee = currentUser()

-- Unresolved issues
resolution = Unresolved

-- Issues due this week
due <= endOfWeek()

-- Recently updated
updated >= -7d

-- High severity issues
severity in ("Critical", "Major")
```

---

## 🎯 QA-Specific Workflows

### Bug Reporting Workflow
1. **Create issue** with bug template
2. **Set priority** based on impact
3. **Assign to developer** or leave unassigned
4. **Add labels** for categorization
5. **Link to test case** if applicable
6. **Add screenshots** or videos
7. **Set due date** if urgent

### Test Execution Workflow
1. **Create test execution** issue
2. **Link test cases** to execution
3. **Update status** as you test
4. **Report bugs** found during testing
5. **Add comments** with test results
6. **Mark execution** as complete

### Release Testing Workflow
1. **Create release** issue
2. **Link all related** issues
3. **Set release date** and version
4. **Track testing progress**
5. **Update release notes**
6. **Mark as released** when done

---

## 🔧 Customization Tips

### Dashboard Widgets
- **Assigned to Me:** Quick access to your issues
- **Activity Stream:** Recent updates
- **Filter Results:** Custom JQL queries
- **Gadgets:** Burndown charts, velocity charts

### Quick Filters
- **My Issues:** `assignee = currentUser()`
- **Recent Issues:** `updated >= -7d`
- **High Priority:** `priority in (High, Critical)`
- **Bugs Only:** `type = Bug`

### Email Notifications
- **Watch projects** for updates
- **Set notification preferences**
- **Use email filters** to organize
- **Create rules** for auto-assignment

---

## 📱 Mobile Tips

### Mobile App Shortcuts
- **Swipe left/right** → Navigate issues
- **Pull to refresh** → Update data
- **Tap and hold** → Quick actions
- **Shake device** → Report feedback

### Mobile Workflow
- **Quick status updates** on the go
- **Photo attachments** from mobile
- **Voice comments** for quick notes
- **Offline mode** for limited connectivity

---

## 🚀 Productivity Hacks

### Time-Saving Tips
- **Use templates** for common issues
- **Set up quick filters** for frequent searches
- **Use bulk operations** for multiple issues
- **Create dashboards** for different views
- **Use keyboard shortcuts** religiously

### Automation
- **Webhooks** for external integrations
- **Automated workflows** for status changes
- **Scheduled reports** for regular updates
- **Email rules** for auto-assignment

---

<div align="center">
  <i>Part of <a href="https://github.com/Yasin-asif/SQA-Professional-Portfolio">Muhammad Yasin's SQA Professional Portfolio</a></i>
</div> 