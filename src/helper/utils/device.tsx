
export  const getServerType  =  (userAgent :  string | undefined) =>  {
  if (!userAgent)  return  "destop"  ;  
  const isMobile = /Mobi|Android|iPhone/i.test(userAgent);


}