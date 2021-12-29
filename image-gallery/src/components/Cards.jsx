import { useFetchImages } from '../hooks/useFetchImages';
import Card from './Card'
import FormImg from './FormImg';
import Loading from './Loading';

const Cards = () => {

    const [images, loading, handleSubmit] = useFetchImages()

    return (
        <div className='text-center'>
            <hr></hr>
            <FormImg handleSubmit={handleSubmit} />
            <hr></hr>
            {loading && <Loading />}
            <div className='row' >

                {
                    images.map((img) => {
                        return <div key={img.id} className='col' >

                            <Card img={img.urls.regular} />

                        </div>
                    })
                }
            </div>

        </div>
    );
};

export default Cards;
