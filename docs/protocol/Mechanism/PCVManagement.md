---
sidebar_position: 2
---

# PCV Management
The PCV (Protocol Controlled Value) is the aggregate amount of all the funds held by the protocol on its various PCV Deposits. It is managed collectively by all the Tribe DAO token holders, through the protocol Governance.

Through governance proposals, anyone can suggest new "yield strategies" or PCV deployments, changes of sizes or affectations, and if approved, new PCV Deposits will be deployed to implement them.

The movement of PCV between deposits can be performed by any smart-contract with the `PCV_CONTROLLER` role (see Access Control).

Some pre-approved PCV movements can be triggered by the [PCV Guardian](https://github.com/fei-protocol/fei-protocol-core/blob/develop/contracts/pcv/PCVGuardian.sol), for instance to save funds held on a compromised PCV deposit, or move yield farming rewards to a suitable deposit where they can be delegated to vote in other DAOs.