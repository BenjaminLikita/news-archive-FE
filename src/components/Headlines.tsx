

type Headline = {
    id: number;
    headline: string;
    url: string;
    imageUrl: string;
    createdAt: string;
}

const Headlines = ({headlines}:{headlines: Headline[]}) => {

    return(
        headlines.map(headline => {
            const split = headline.imageUrl.split("/")
            // console.log(headline, split)
            const foldername = split[1]
            const imageName = split[2]
            return (
            <div key={headline.id} className="my-3">
                <img className="aspect-auto" src={`http://localhost:3000/image/${foldername}/${imageName}`} alt="" />
                <a className="text-xl underline underline-offset-4 hover:text-purple-600 text-white" href={headline.url}>{headline.headline}</a>
            </div>
            )
        })
    )
}

export default Headlines