type PetType = 'dog' | 'cat' | 'fish';
type PetSex = 'Masculino' | 'feminino';
type Pet = {
    type: PetType,
    image: string,
    name: string,
    color: string,
    sexo: PetSex,
}

const data: Pet[] = [
    { type: 'dog', image: 'pastor-alemao.jpg', name: 'Pastor-alemão', color: 'Amarelo e Preto', sexo: 'Masculino', }, { type: 'dog', image: 'labrador.jpg', name: 'Labrador-retriever', color: 'Branco', sexo: 'Masculino', }, { type: 'dog', image: 'zwergspitz.jpg', name: 'Zwergspitz', color: 'Amarelo', sexo: 'feminino', }, { type: 'dog', image: 'husky.jpg', name: 'Husky Siberiano', color: 'Branco e Preto', sexo: 'Masculino', }, { type: 'dog', image: 'golden.jpg', name: 'Golden Retriever', color: 'Amarelo', sexo: 'Masculino', }, { type: 'dog', image: 'poodle.jpg', name: 'Poodle', color: 'Branco', sexo: 'feminino', }, { type: 'dog', image: 'bulldog.jpg', name: 'Bulldog', color: 'Branco e Amarelo', sexo: 'Masculino', }, { type: 'cat', image: 'persa.jpg', name: 'Persa', color: 'Amarelo', sexo: 'Masculino', }, { type: 'cat', image: 'mainecoon.jpg', name: 'Maine Coon', color: 'Preto e Branco', sexo: 'Masculino', }, { type: 'cat', image: 'bengal.jpg', name: 'Bengal', color: 'Branco, Preto e Amarelo', sexo: 'feminino', }, { type: 'cat', image: 'siames.jpg', name: 'Siamês', color: 'Amarelo e Preto', sexo: 'Masculino', }, { type: 'cat', image: 'sphynx.jpg', name: 'Sphynx', color: 'Branco', sexo: 'Masculino', }, { type: 'fish', image: 'neon.jpg', name: 'Tetra Neon', color: 'Vermelho e Azul', sexo: 'Masculino', }, { type: 'fish', image: 'matogrosso.jpg', name: 'Mato Grosso', color: 'Laranja', sexo: 'Masculino', }, { type: 'fish', image: 'limpavidro.jpg', name: 'Limpa Vidro', color: 'Verde e Branco', sexo: 'Masculino', }, { type: 'fish', image: 'tanictis.jpg', name: 'Tanictis', color: 'Vermelho', sexo: 'Masculino', }, { type: 'fish', image: 'acara.jpg', name: 'Acará Bandeira', color: 'Preto', sexo: 'Masculino', }
]

export const Pet = {
    getAll: (): Pet[] => {
        return data
    },
    getFromType: (type: PetType): Pet[] => {
        return data.filter(item => item.type === type)
    },
    getFromName: (name: string): Pet[] => {
        return data.filter(item =>
            item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
        );
    }
};
