export const fetchProducts = async (): Promise<any> => {
    const url = "https://gist.githubusercontent.com/thiagossampaio/060e82b4801b0841fc683b0ce5efa06d/raw/e3cc555d9c71fd1b1160e20d7b10c083b5abcd61/desafio_front_end";

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Network response was not ok ${response.statusText}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};