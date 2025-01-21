// eslint-disable-next-line react/prop-types
export default function Meme({memeData})
{
    return(
        <div className="meme">
            <span className="top-text">{memeData.topText}</span>
            <img src={memeData.image} alt="the-meme" />
            <span className="bottom-text">{memeData.bottomText}</span>
        </div>
    )
}