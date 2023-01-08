//SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
/*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
              ,----..                         ,---,.                                                 ,----..                             ,--,                                               ,----..              
             /   /   \                      ,'  .'  \                                 ,---,         /   /   \   ,--,                   ,--.'|                                              /   /   \             
   ,---.    /   .     :    ,---.          ,---.' .' |   ,---.    __  ,-.            ,---.'|        |   :     :,--.'|    __  ,-.        |  | :                                    ,---.    /   .     :    ,---.   
  '   ,'\  .   /   ;.  \  '   ,'\         |   |  |: |  '   ,'\ ,' ,'/ /|            |   | :        .   |  ;. /|  |,   ,' ,'/ /|        :  : '               .--.--.             '   ,'\  .   /   ;.  \  '   ,'\  
 /   /   |.   ;   /  ` ; /   /   |        :   :  :  / /   /   |'  | |' | ,---.      |   | |        .   ; /--` `--'_   '  | |' | ,---.  |  ' |      ,---.   /  /    '           /   /   |.   ;   /  ` ; /   /   | 
.   ; ,. :;   |  ; \ ; |.   ; ,. :        :   |    ; .   ; ,. :|  |   ,'/     \   ,--.__| |        ;   | ;    ,' ,'|  |  |   ,'/     \ '  | |     /     \ |  :  /`./          .   ; ,. :;   |  ; \ ; |.   ; ,. : 
'   | |: :|   :  | ; | ''   | |: :        |   :     \'   | |: :'  :  / /    /  | /   ,'   |        |   : |    '  | |  '  :  / /    / ' |  | :    /    /  ||  :  ;_            '   | |: :|   :  | ; | ''   | |: : 
'   | .; :.   |  ' ' ' :'   | .; :        |   |   . |'   | .; :|  | ' .    ' / |.   '  /  |        .   | '___ |  | :  |  | ' .    ' /  '  : |__ .    ' / | \  \    `.         '   | .; :.   |  ' ' ' :'   | .; : 
|   :    |'   ;  \; /  ||   :    |        '   :  '; ||   :    |;  : | '   ;   /|'   ; |:  |        '   ; : .'|'  : |__;  : | '   ; :__ |  | '.'|'   ;   /|  `----.   \        |   :    |'   ;  \; /  ||   :    | 
 \   \  /  \   \  ',  /  \   \  /         |   |  | ;  \   \  / |  , ; '   |  / ||   | '/  '        '   | '/  :|  | '.'|  , ; '   | '.'|;  :    ;'   |  / | /  /`--'  /         \   \  /  \   \  ',  /  \   \  /  
  `----'    ;   :    /    `----'          |   :   /    `----'   ---'  |   :    ||   :    :|        |   :    / ;  :    ;---'  |   :    :|  ,   / |   :    |'--'.     /           `----'    ;   :    /    `----'   
             \   \ .'                     |   | ,'                     \   \  /  \   \  /           \   \ .'  |  ,   /        \   \  /  ---`-'   \   \  /   `--'---'                       \   \ .'              
              `---`                       `----'                        `----'    `----'             `---`     ---`-'          `----'             `----'                                    `---`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
*/    
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BoredCircles is ERC721Enumerable, Ownable {
    using Strings for uint256;
    using Counters for Counters.Counter;
    using SafeMath for uint256;

    Counters.Counter private _tokenIds;
    string public baseURI;
    string public baseExtension = "";
    string public notRevealedUri;
    uint public PRICE = 0.008 ether;
    uint256 public maxSupply = 5555;
    uint256 public maxMintAmount = 5; 
    bool public paused = false;
    bool public revealed = false;
    uint256[] public tokenId;
    mapping(address => uint256) public addressMintedBalance;


    event AddressesAdded(address[]);
    event AddressCalled(address, uint);

    constructor(
        string memory _name,
        string memory _symbol,
        string memory _initBaseURI,
        string memory _initNotRevealedUri
    ) ERC721(_name, _symbol) {
        setBaseURI(_initBaseURI);
        setNotRevealedURI(_initNotRevealedUri);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }


    function deployCircle(uint256 _count) public payable {
        require(!paused, "Contract is paused...");
        uint256 supply = totalSupply();
        require(_count > 0, "Please mint 1 Circle.,.");
        require(_count <= maxMintAmount, "Cannot exceed this amount,..");
        require(supply + _count <= maxSupply, "SORRY, Circle SALE IS CLOSED..,");
        require(msg.value >= PRICE.mul(_count), "Not enough ether to purchase Circle.");

        for (uint256 i = 0 ; i < _count; i++)
         {
            uint256 currentCount = _tokenIds.current();
            if (currentCount >= 1111 && currentCount <= 2221 ) PRICE = 0.018 ether;
            if (currentCount >= 2222 && currentCount <= 3332 ) PRICE = 0.028 ether;
            if (currentCount >= 3333 && currentCount <= 4443 ) PRICE = 0.038 ether;
            if (currentCount >= 4444 && currentCount <= 5555 ) PRICE = 0.048 ether;
            _mintSingleNFT();
        }
    }

    function reserveNFTs() public onlyOwner {
        uint totalMinted = _tokenIds.current();

        require(totalMinted <  maxSupply, "Not enough NFTs left to reserve");

        for (uint i = 0 ; i < 250; i++) {
            _mintSingleNFT();
        }
    }
    function _mintSingleNFT() private {
        uint newTokenID = _tokenIds.current();
        _safeMint(msg.sender, newTokenID);
        _tokenIds.increment();
    }

    function _mintSingleNFT1() public onlyOwner {
        uint newTokenID = _tokenIds.current();
        _safeMint(msg.sender, newTokenID);
        _tokenIds.increment();
    }

    function walletOfOwner(address _owner)
    public
    view
    returns (uint256[] memory)
    {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](ownerTokenCount);
        for (uint256 i; i < ownerTokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokenIds;
    }

    function tokenURI(uint256 _Id)
    public
    view
    virtual
    override
    returns (string memory)
    {
        require(
            _exists(_Id),
            "ERC721Metadata: URI query for nonexistent token"
        );

        if(revealed == false) {
            return notRevealedUri;
        }

        string memory currentBaseURI = _baseURI();
        return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, _Id.toString(), baseExtension))
        : "";
    }



    //only owner
    function reveal() public onlyOwner {
        revealed = true;
    }

    function setPRICE(uint256 _newPRICE) public onlyOwner {
        PRICE = _newPRICE;
    }

    function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
        maxMintAmount = _newmaxMintAmount;
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
        baseExtension = _newBaseExtension;
    }

    function setNotRevealedURI(string memory _notRevealedURI) public onlyOwner {
        notRevealedUri = _notRevealedURI;
    }

    function pause(bool _state) public onlyOwner {
        paused = _state;
    }

    function getCurrentToken() public view returns (uint256) {
        return _tokenIds.current();
    }

    function withdraw() public payable onlyOwner {
        uint balance = address(this).balance;
        require(balance > 0, "No ether left to withdraw");

        (bool success, ) = (msg.sender).call{value: balance}("");
        require(success, "Transfer failed.");
    }
}