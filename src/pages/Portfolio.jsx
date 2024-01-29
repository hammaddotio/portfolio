import { Button } from '@material-tailwind/react'
import Main from '../components/Layout/Main'
import websitesPortfolio from '../data/websitesPortfolio.json'
import { Link } from 'react-router-dom'
const Portfolio = () => {
    console.log(websitesPortfolio)
    return (
        <Main>
            <div className=''>
                <div className='w-[10rem] my-10'>
                    <h1 className=' mb-2 text-2xl font-bold uppercase'>PORTFOLIO</h1>
                    <hr className='' />
                </div>
                <div className='flex flex-col gap-10'>
                    {/* WEBSITES */}
                    <div>
                        <h1 className='mb-5 text-xl font-semibold uppercase'>WEBSITES</h1>
                        <div className='flex flex-wrap gap-1 '>
                            {
                                websitesPortfolio?.map((website, index) => (
                                    <div key={index} className="w-72 rounded-xl bg-blue-gray-900 shadow-md p-4 mb-4">
                                        <img src={website.image} alt={website.title} className="w-full h-52 object-cover rounded-2xl mb-2" />
                                        <div>
                                            <h1 className="text-lg font-semibold text-white uppercase mb-2">{website.title}</h1>
                                            <p className="text-sm text-blue-gray-300 mb-2">Technologies: {website.technology}</p>
                                            <div className='flex justify-between'>
                                                {website.description && (
                                                    <Link to={website.read_me} target="_blank" rel="noopener noreferrer" className="block">
                                                        <Button>
                                                            Details
                                                        </Button>
                                                    </Link>
                                                )}
                                                <Link to={website.link} target="_blank" rel="noopener noreferrer" className="block">
                                                    <Button>
                                                        View
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))

                            }
                        </div>
                    </div>

                    {/* MOBILE APPS */}
                    {/* Portfolio.txt */}
                </div>

            </div>
        </Main>
    )
}

export default Portfolio
