import  { useEffect, useState } from 'react';
import './Banner.css';

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const images = document.querySelectorAll('.banner-img');
      images[activeIndex].classList.remove('active');
      const nextIndex = (activeIndex + 1) % images.length;
      images[nextIndex].classList.add('active');
      setActiveIndex(nextIndex);
    }, 3000); // Cambia de imagen cada 3 segundos (ajusta según tus preferencias)

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    
  <div className="container banner">
     <img id="img1" className="banner-img active" src="https://media.licdn.com/dms/image/C4D12AQHOceMDNxG8KA/article-cover_image-shrink_720_1280/0/1604494199861?e=2147483647&v=beta&t=2iSgIkE8QvS4oRu7ZOd_YMhQdGyI_IgpjbKsTGijoCY" alt="" />
    <img id="img2" className="banner-img" src="https://media.tenor.com/-wNmBi1U2E8AAAAd/sale.gif" alt="" />
    <img id="img3" className="banner-img" src="https://f.fcdn.app/imgs/797e30/www.ptienda.com.uy/philuy/ec38/original/recursos/110/1920x500/1920x500.gif" alt="" />
    <img id="img4" className="banner-img" src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/02/25/16458002845779.gif" alt="" />
    <img id="img5" className="banner-img" src="https://vangogh.teespring.com/v3/image/12EVK10jQxRf-PlivW0xr0YToz4/480/560.jpg" alt="" />
    <img id="img6" className="banner-img" src="https://target.scene7.com/is/image/Target/GUEST_f546c66a-45d9-4b2d-92a0-e9420a0ea6ac?wid=488&hei=488&fmt=pjpeg" alt="" />
    <img id="img7" className="banner-img" src="https://www.ld-aromaticos.com/imagenes/productos/Fresh%20New%20Car-Spray%2060%20ml-Coche%20nuevo." alt="" />
    <img id="img8" className="banner-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPfe_T8fvc1uKYYQtzOnlXP2YdX96iRx18Q&usqp=CAU" alt="" />
    <img id="img9" className="banner-img" src="https://http2.mlstatic.com/D_NQ_753106-MLA71830383654_092023-OO.webp" alt="" />
    <img id="img10" className="banner-img" src="https://http2.mlstatic.com/D_NQ_807444-MLA54784979760_032023-OO.webp" alt="" />
</div>

   
  );
};

export default Banner;