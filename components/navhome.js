import Image from 'next/image'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'


export default function NavHome({home}) {
  return (
    <div>
      {home ? (
      <>
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt="Tim Kao"
        />
        <h1 className={utilStyles.heading2Xl}>Tim Kao</h1>
      </>
      ) : (
        <>
          <Link href="/">
            <a>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt="Tim Kao"
              />
            </a>
          </Link>
          <h2 className={utilStyles.logoText} >
            <Link href="/" >
              <a className={utilStyles.colorInherit + "navbar-brand text-dark"}>Tim Kao</a>
            </Link>
          </h2>
        </>
      )}
    </div>
  )
}