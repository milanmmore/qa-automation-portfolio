# 🐞 JIRA Bug Report Example

## Issue Details

**Project:** AI Requirements Conflict Detector  
**Issue Type:** Bug  
**Priority:** High  
**Severity:** Medium  
**Reporter:** Muhammad Yasin Asif  
**Assignee:** Development Team  
**Created:** 2025-07-30  
**Status:** Open  

---

## 🎯 Summary
Login button disappears after applying discount code in checkout flow

## 📝 Description
When users apply a discount code during the checkout process, the "Proceed to Payment" button becomes invisible, preventing users from completing their purchase.

## 🔍 Steps to Reproduce
1. Add items to shopping cart
2. Proceed to checkout page
3. Enter a valid discount code (e.g., "SAVE20")
4. Click "Apply Discount"
5. Observe that the "Proceed to Payment" button disappears

## ✅ Expected Result
The "Proceed to Payment" button should remain visible and functional after applying a discount code.

## ❌ Actual Result
The "Proceed to Payment" button becomes invisible, making it impossible for users to complete their purchase.

## 🖼️ Screenshots
- Before applying discount: Button visible
- After applying discount: Button disappears

## 🌍 Environment
- **Browser:** Chrome 115, Firefox 115
- **OS:** Windows 10, macOS
- **Device:** Desktop, Mobile
- **URL:** https://checkout.example.com

## 🔗 Related Issues
- Linked to: STORY-123 (Discount code implementation)
- Blocks: STORY-456 (Checkout flow completion)

## 📊 Impact
- **Business Impact:** High - Users cannot complete purchases
- **User Impact:** High - Frustrating user experience
- **Revenue Impact:** Direct loss of sales

## 🏷️ Labels
- `checkout`
- `ui-bug`
- `high-priority`
- `user-experience`

---

## 📋 Acceptance Criteria
- [ ] Button remains visible after applying discount
- [ ] Button functionality is preserved
- [ ] Works across all supported browsers
- [ ] Mobile responsive behavior maintained

## 🧪 Test Cases
- TC-001: Apply valid discount code
- TC-002: Apply invalid discount code
- TC-003: Remove discount code
- TC-004: Multiple discount codes

---

<div align="center">
  <i>Part of <a href="https://github.com/Yasin-asif/SQA-Professional-Portfolio">Muhammad Yasin's SQA Professional Portfolio</a></i>
</div> 