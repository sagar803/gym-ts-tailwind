import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import Logo from '../../assets/Logo.png'
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: Boolean
}

export const Navbar = ({selectedPage, setSelectedPage, isTopOfPage}: Props) => {
  const flexBetween = "flex items-center justify-between"
  const isAboveMediumScreens = useMediaQuery("(min-width: 1080px)")
  const navbarBorderBottom = isAboveMediumScreens ? "" : "border-b-[1px] border-b-gray-500 drop-shadow"
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const tabs = ["Home","Benefits", "Our Classes", "Contact Us"]
  
  return (
    <nav>
      <div className={`${flexBetween} ${navbarBorderBottom} backdrop-blur-lg fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo}/>

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                {
                  tabs.map((s, index) => (
                    <Link key={index} page={s} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  ))
                }
                </div>
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
              </div>
            </div>           
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white"/>
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-9">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
          {tabs.map((s, index) => (
              <Link key={index} page={s} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          ))}
          </div>
        </div>
      )}
    </nav>
  )
}
