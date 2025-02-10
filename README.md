
This case is destined to front end software engineers to validate skills such as state management, code architecture, git usage, merkl libraries usage and providing feedback.

# 📒 Case

Make a minimal version of the merkl app where a user can connect, switch chains, check their token balances and filter opportunities on selected tokens + 1 or more other filters/sorting of your choice.

To achieve this you have to use merkl’s [dappkit](https://github.com/AngleProtocol/dappkit) & [api package](https://www.npmjs.com/package/@merkl/api?activeTab=readme), which include all the components and functions to handle wallets & fetch merkl’s resources.

# ✅ Requirements

- [ ]  For each opportunity, show at least the opportunity’s name, apr and tvl.
- [ ]  Display a maximum of 5 of the user’s tokens sorted by dollar value.
- [ ]  Handle wallet connection & switching chains
- [ ]  Do not restrict viewing and filtering to connected users

### 🤩 Bonus ideas

- [ ]  Handle pagination with a static/dynamic page size of your choice
- [ ]  Handle SSR (being able to share a link to a filtered view)
- [ ]  Imagine a filter that we don’t have yet on [app.merkl.xyz](http://app.merkl.xyz)
- [ ]  Tweak the theme of the app or add a theme selector

# 🚔 Modalities

- Start from this basic remix app which includes the dappkit w/ a default configuration
- Submit a pull request
- Try not to spend more than 3 hours to complete it

# Relevant Documentation

https://github.com/AngleProtocol/dappkit

[npm: @merkl/api](https://www.npmjs.com/package/@merkl/api?activeTab=readme)

[Merkl Documentation Portal | Merkl Docs](https://docs.merkl.xyz/)

[Merkl](https://app.merkl.xyz/)

[Remix - Build Better Websites](https://remix.run/)

# License

This project is licensed under the **BSD 3-Clause License with Specific Usage Restrictions**.

## Key Terms

- **Permitted Use**: This software may only be used to develop applications (frontend or backend) that directly interface with the Merkl incentive distribution solution.
- **Prohibited Uses**:
  - Developing standalone applications unrelated to the original backend.
  - Creating competitive backend services or applications.
  - Reverse engineering the core backend logic.
  - Developing alternative backend implementations.
- **Commercial Use**: Commercial use of this software, including incorporating it into paid products or services, is **strictly prohibited without prior written approval** from Angle Labs, Inc. For inquiries regarding commercial use, contact [contact@merkl.xyz](contact@merkl.xyz)

## Full License

For detailed terms and conditions, refer to the [`LICENSE`](./LICENSE) file in this repository.

