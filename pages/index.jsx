import Head from 'next/head'
import Image from 'next/image'
import { userInfo } from 'os'
import { useState } from 'react'
import { NFTCard } from './components/nftCard'

const Home = () => {
  const [wallet, setWalletAddress] = useState("");
  const [collection, setCollectionAddress] = useState("");
  const [NFTs, setNFTs] = useState([]);
  const [fetchForCollection, setFetchForCollection] = useState(false);


  // Gets Nft's owned in a collection:
  const fetchNFTs = async() => {
    
    let nfts;
    console.log("fetching NFT's");
      
    const api_key = "WAM80MMiTL27G4E6Fdvx9XwRWByzcc75";
    const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTs/`;

    if(!collection.length){

      // Our Alchemy NFT API requests: 
      var requestOptions = {
        method: 'GET'
      };

      const fetchURL = `${baseURL}?owner=${wallet}`;

      // fetch NFT's:
      nfts = await fetch(fetchURL, requestOptions).then(data => data.json());

    } else {
      console.log("fetching NFt's for collection owned by address")
      const fetchURL = `${baseURL}?owner=${wallet}&contractAddresses%5B%5D=${collection}`;
      nfts= await fetch(fetchURL, requestOptions).then(data => data.json());
    }

    if(nfts){
      console.log("NFT's", nfts);
      setNFTs(nfts.ownedNfts);
    }
  }

  // Fetch NFts for collections:
  const fetchNFTsForCollection = async () => {
  
    if(collection.length){
    
      var requestOptions = {
        method: 'GET'
      };
      
      // Api call:
      const api_key = "WAM80MMiTL27G4E6Fdvx9XwRWByzcc75";
      const baseURL = `https://eth-mainnet.alchemyapi.io/v2/${api_key}/getNFTsForCollection/`;
      const fetchURL = `${baseURL}?&contractAddress=${collection}&withMetadata=${"true"}`;

      // Fetch Nft's:
      const nfts = await fetch(fetchURL, requestOptions).then(data => data.json());

      if(nfts){
        console.log("NFT's in collection: ", nfts);
        setNFTs(nfts.nfts)
      }
    }
  }

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-y-3">
      <div className="flex flex-col w-full items-center justify-center gap-y-2">
        <label className="font-bold text-4xl items-center justify-center">NFT Gallery Explorer</label>
        <input className="w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50 outline outline-2"
          disabled={fetchForCollection}
          onChange={(e) =>{setWalletAddress(e.target.value)}}
          value={wallet}
          type={"text"}
          placeholder="Add your wallet address:">
        </input>
        <input className="w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50 outline outline-2"
          onChange={(e)=>{setCollectionAddress(e.target.value)}}
          value={collection}
          type={"text"}
          placeholder="Add the collection address:">
        </input>
        <label className="text-gray-500 text-xl">
          <input 
            onChange={(e) => {setFetchForCollection(e.target.checked)}}
            type={"checkbox"}
            className="mr-2">
          </input>
            Fetch for collection
        </label>
        <button
          className={"w-2/5 disabled:bg-slate-500 px-2 py-2 rounded-lg focus:outline-white text-white bg-blue-400 mt-3 "}
          onClick={
            () => {
              if(fetchForCollection){
                fetchNFTsForCollection();
              } else {
                fetchNFTs();
              }
            }
          }>Let's go! 
        </button>
      <div className="divide-dashed divide-y divide-gray-400"></div>
      </div>  


      <div className="flex flex-wrap gap-y-8 mt-4 w-5/6 gap-x-8 justify-center">
          {
            NFTs.length && NFTs.map(nft => {
              return(
                <NFTCard nft={nft}></NFTCard>
              )
            })
          }
      </div>
    </div>
  )
}

export default Home
