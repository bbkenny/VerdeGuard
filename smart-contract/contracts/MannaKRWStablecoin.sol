// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MannaKRWStablecoin is ERC20, Ownable {
    constructor(uint256 initialSupply) ERC20("Manna KRW Stablecoin", "KRWS") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply);
    }

    // Function to allow the owner to mint new tokens
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // Function to allow the owner to burn tokens
    function burn(uint256 amount) public onlyOwner {
        _burn(msg.sender, amount);
    }
}
