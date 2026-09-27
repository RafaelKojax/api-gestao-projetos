export interface ITarefa {
    titulo: string;
    concluida: boolean;
}

export interface IProjeto {
    id?: string;
    nome: string;
    descricao: string;
    dataEntrega: string;
    tarefas: ITarefa[];
}