import Skeleton from 'react-loading-skeleton';

export default function Loading({count = 20}) {
    return (
        <div className="container-view">
            <Skeleton
                count={count}
                style={{marginBottom: '0.5rem'}}
            />
        </div>
    );
}