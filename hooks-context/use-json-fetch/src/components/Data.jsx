import useJsonFetch from "../hooks/UserJsonFetch";

export default function JSONFetch (props) {
    const [ data, loading, error ] = useJsonFetch(props.url, "");

    return (
        <>
            <div className="App-logo">
                 {(loading && 'Loading...') || (data && data.status) || (error && error.status)}
            </div>
        </>
    );
}