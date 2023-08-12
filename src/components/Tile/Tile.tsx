import './Tile.css';

interface Props {
    image: string;
    num: number;
}

export default function Tile({num, image}: Props) {
    if(num%2 === 0){
        return <div className='tile black-tile'>
            <img src={image}/>
        </div>
    }else {
        return <div className='tile white-tile'>
            <img src={image}/>
        </div>
    }
}