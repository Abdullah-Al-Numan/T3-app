import React,{useEffect,useState} from 'react';
import styles from "./index.module.css"

const Index = () => {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
        console.log('scrollY', window.scrollY)
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  
    }, []);
  return (
    <>
    <div className={styles.body}>
          <div className={styles.box}>
        <div className={styles.form}>
            <h2 className={styles.heading}>Sign in</h2>
            <div className={styles.inputBox}>
                <input type="text"  required />
                <span>Username</span>
                <i></i>
            </div>
            <div className={styles.inputBox}>
                <input type="password" required/>
                <span>Password</span>
                <i></i>
            </div>
            <div className={styles.links}>
                <a href="#">Forget your password?</a>
                <a href="#">Sign up!</a>
            </div>
        </div>
    </div>
    </div>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ab tenetur libero rem obcaecati, at tempora culpa aperiam perferendis sapiente quia nostrum iste corrupti laborum nisi qui recusandae eaque! Necessitatibus.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum consectetur voluptate molestias enim totam delectus est, in veritatis tempora nulla inventore quod sequi perspiciatis minus harum neque non voluptas vitae.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis magni suscipit delectus? Quibusdam eum quo rem, labore magnam cum nisi repudiandae officiis ad dolor obcaecati velit nobis amet incidunt quidem?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias debitis deserunt aliquid fuga molestiae sapiente illum architecto cum modi numquam eos corporis, cupiditate explicabo. Architecto minus eos quis placeat beatae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facere inventore est ipsum dicta repudiandae odit, nulla laboriosam in, et excepturi officia dolor dignissimos sint ea labore, magnam ullam! Voluptates!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolore non molestiae ab, impedit delectus quod laboriosam mollitia sint ea et aperiam totam eveniet obcaecati dolor dolores provident molestias tempore!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo architecto, provident quam debitis voluptate repudiandae amet laudantium illum sint ullam itaque rerum eum deleniti, sapiente, voluptatum vero! Facere, velit quaerat!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, adipisci ipsa nobis sit nam repudiandae vero ut, libero velit, mollitia architecto a consectetur excepturi ullam minus beatae consequuntur expedita assumenda.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, illo atque minus laudantium et eaque reprehenderit sit reiciendis. Amet vel maiores mollitia facilis excepturi tempora ipsa accusantium optio saepe natus.
    </p>
    </>
  )
}

export default Index;