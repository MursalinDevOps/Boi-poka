import { toast } from "react-toastify";

const getStoredReadList = () => {
  const storedListStr = localStorage.getItem("read-list");

  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
}

const addToStoredReadList = (id) => {
  const storedList = getStoredReadList();

  if (storedList.includes(id)) {

    toast.error('Book already exists on the reading list!')
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('read-list', storedListStr);
    toast.success('Book Added to the Reading List !')
  }
}
// 
const getStoredWishlist = () => {
    const wishListStr = localStorage.getItem("wish-list");
  
    if (wishListStr) {
      const wishList = JSON.parse(wishListStr);
      return wishList;
    } else {
      return [];
    }
  }
  
  const addToStoredWishlist = (id) => {
    const wishList = getStoredWishlist();
  
    if (wishList.includes(id)) {
      toast.error('Book already Exists on the wishlist !!!')
    } else {
      wishList.push(id);
      const wishListStr = JSON.stringify(wishList);
      localStorage.setItem('wish-list', wishListStr);
      toast.success('Book Added to the wish List !')
    }
  }


export {addToStoredReadList, addToStoredWishlist, getStoredReadList, getStoredWishlist}