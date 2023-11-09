import AnchorLink from "react-anchor-link-smooth-scroll";

function VoltaHome() {

    return (
        <>

            <div className="position-relative">
                <div className=" bottom-0 end-0 mb-3 me-3 zindex-sticky fixed-bottom">
                    <div className="float-end">

                        <AnchorLink href="#navbar" >
                            <div className="bg-red p-2">
                                <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M15 20H9v-8H4.16L12 4.16L19.84 12H15v8Z" /></svg>
                            </div>
                        </AnchorLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default VoltaHome;