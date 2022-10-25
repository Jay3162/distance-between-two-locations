import react, {useState, useEffect} from 'react';

export default function LocationFinder() {
    const [location, setLocation] = useState();

    useEffect(() => {
        const fetchLoc = async() => {
            try {
                const request = await fetch("http://api.positionstack.com/v1/forward?access_key=3e5cecb3690e68edf9a08f534a5d8345&query=London&limit=1");
                console.log(request)
                const resp = await request.json();
                if (!resp.error()) {
                    setLocation(resp)
                }
                console.log(resp)
            } catch(e ) {
                console.error(e)
            }
        }
        fetchLoc();
    }, [])
}
