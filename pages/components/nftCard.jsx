import React, {useState} from "react";

export const NFTCard = ({nft}) => {
  
    function copyToClipboard () { 
        navigator.clipboard.
        writeText(nft.contract.address)
        .then(() => {
            console.log(`"${nft.contract.address}" was copied to clipboard.`);
          })
          .catch((err) => {
            console.error(`Error copying text to clipboard: ${err}`);
          });      
    };

    return (
        <div className="w-1/4 flex flex-col" key={nft.id.tokenId}>
            <div className="rounded-md" >
                <img className="object-cover h-128 w-full rounded-t-md"
                src={nft.media[0].gateway}></img>
            </div>
            <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110" >
                <div className="" >
                    <h2 className="text-xl text-black-800" >{nft.title}</h2>
                    <p className="text-gray-700" >{nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p>

                    <div className="flex-col flow-root"> 
                        <p className="text-gray-700 float-left"> 
                            {`${nft.contract.address.substr(0,5)}...${nft.contract.address.substr(nft.contract.address.length - 4)}`}   
                        </p>
                        <button className="float-right" onClick={copyToClipboard}>
                            <img className="w-5 h-5 mr-20" 
                                src="https://www.freeiconspng.com/thumbs/copy-icon/copy-duplicate-editor-files-icon--18.png"
                                viewBox="0 0 20 20"></img>
                        </button>
                    </div>
                    
                </div>
                <div className="flex-grow mt-2" >
                    <p className="text-gray-700" >{nft.description?.substr(0, 150)}</p>
                </div>
                <div className="flex justify-center mb-1" >
                    <a 
                    target="_blank" 
                    href={`https://etherscan.io/token/${nft.contract.address}`}
                    className="py-2 px-4 bg-blue-500 w-2/4 text-center rounded-lg text-white cursor-pointer mt-2">View on etherscan</a>
                </div>
            </div>
        </div> 
    ) 
}