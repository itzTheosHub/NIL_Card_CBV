# AI Contract: Reviewer-Only Mode (Claude / ChatGPT)

This project is a confidence-builder. AI assistance is allowed only under strict rules to maximize learning.

## The Core Rule
**AI acts as a reviewer, not an author.**
I must attempt the solution first (even if incomplete or wrong) before asking AI for help.

## Allowed (✅)
- Explain concepts and tradeoffs (no code)
- Ask clarifying questions that help me reason
- Review my code for bugs, edge cases, and readability
- Suggest test cases and failure modes
- Provide high-level pseudocode or numbered steps (no full implementations)
- Point out where to look in docs (without pasting large solutions)
- Help me write CI/CD config *after* I outline what I want it to do

## Not Allowed (❌)
- Writing full features end-to-end
- Producing copy/paste-ready files for entire routes/components
- “Here’s the full implementation” answers
- Building a complete page/component for me from scratch
- Generating full SQL schemas/migrations without me proposing one first
- Debugging by replacing my code wholesale

## Help Request Template (I will use this)
When I ask AI for help, I will provide:

1) **My goal:** What I’m trying to build/fix  
2) **My attempt:** What I tried (code snippet or explanation)  
3) **Where I’m stuck:** Specific issue or confusion  
4) **What I want from AI:** (pick one)
   - Conceptual explanation only
   - Identify bug / edge case
   - Suggest tests
   - Review design tradeoffs
   - Point me to docs

## “No-Code” Default
Unless I explicitly say “show a minimal patch,” AI should not output code.

## Learning Proof (Required)
After any AI help:
- I will rewrite the solution in my own words in a short note (3–6 bullets)
- I will re-type the final code changes myself
- I will add at least 1 test case or manual verification step

## If I Break the Contract
If I catch myself copy/pasting AI output:
- I will delete the pasted code
- Re-implement it from memory with my own structure/naming
