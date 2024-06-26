import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

interface Props {
    children: React.ReactNode  
    setSelectedPage: (value: SelectedPage)=> void
}

const ActionButton = ({children, setSelectedPage }: Props) => {
    return (
        <AnchorLink className="rounded-md  bg-red-400 px-10 hover:bg-primary-500 p-2 hover:text-white" 
        onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}>
            {children}
        </AnchorLink>
    )
}

export default ActionButton
