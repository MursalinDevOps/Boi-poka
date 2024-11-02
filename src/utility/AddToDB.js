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
    alert("book already exists !!!");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('read-list', storedListStr)
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
      alert("book already exists in the wishlist !!!");
    } else {
      wishList.push(id);
      const wishListStr = JSON.stringify(wishList);
      localStorage.setItem('wish-list', wishListStr)
    }
  }


export {addToStoredReadList, addToStoredWishlist, getStoredReadList, getStoredWishlist}