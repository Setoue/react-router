
import { useState, useEffect } from "react";

//4 -custom hook

export const useFetch = (url) => {

    const [data, setData] = useState(null); //dados que serão retornados da api

    const [callFetch, setCallFetch] = useState(false); //variavel que irá chamar a requisição

    //LOADING

    const [loading, setLoading] = useState(false);

    // Tratando error

    const [error, setError] = useState(null);

    //GET
    useEffect(() => {

        const fetchData = async () => {

            setLoading(true);//atualiza o estado de loading para true

            try {
                const request = await fetch(url);//faz a requisição para a url e armazena na variavel response, metodo GET
                const data = await request.json();//converte a resposta para json que é o memsmo que um objeto

                setData(data);//atualiza o estado de products com o valor de data
            } catch {
                setError("Houve algum erro ao carregar os dados")
            }

            setLoading(false);
        }

        fetchData();
    }, [url, callFetch]); //caso a url mude, o useEffect é executado novamente

    //5 - refatorando o hook para post

    //POST
    const [config, setConfig] = useState(null); //configuração da requisição
    const [method, setMethod] = useState(null); //metodo da requisição

    const httpConfig = (data, method) => {

        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"//tipo de conteudo que esta sendo enviado
                },
                body: JSON.stringify(data)
            });

            setMethod(method); //atualiza o estado de method com o valor de method que é POST 
        }

    }

    useEffect(() => {

        const httpRequest = async () => {
            if (method === "POST") {

                let fetchOption = [url, config];

                const request = await fetch(...fetchOption);//faz a requisição para a url e armazena na variavel response, 
                //é como se fosse o mesmo que fetch(url, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(data)})
                const json = await request.json();//converte a resposta para json que é o memsmo que um objeto

                setCallFetch(json);//atualiza o estado de products com o valor de data
            }
        }

        httpRequest();
    }, [config, method, url])

    return { data, httpConfig, loading, error }; //é necessário retornar o data para que possa ser utilizado no componente App.js
};