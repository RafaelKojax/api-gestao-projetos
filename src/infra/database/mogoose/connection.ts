import mongoose from 'mongoose';

export const connectDB = async (): Promise<void> => {
    try {
        const uri = 'mongodb://127.0.0.1:27017/gestao_projetos';

        await mongoose.connect(uri);
        console.log('Conectado ao MongoDB com sucesso!');
    } catch (error) {
      console.error('Erro ao conectar ao MongoDB:', error);
      process.exit(1);
    }
};

