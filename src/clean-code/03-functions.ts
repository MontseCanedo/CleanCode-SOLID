(() => {

    function getMovieById(movieId: string) {
        console.log({ movieId });
    }

    function getMovieCastById (id: string) {
        console.log({ id });
    }

    function getActorBioById(actorId: string) {
        console.log({ actorId });
    }

    interface Movie {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }

    function createMovie({cast, description, rating, title}: Movie) {
        console.log({ title, description, rating, cast });
    }

    interface Actor {
        birthdate: Date;
        fullName: string;
    }

    function createActor({fullName, birthdate}: Actor) {
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor');
        return true;

    }
})();
