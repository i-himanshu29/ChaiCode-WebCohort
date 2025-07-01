import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

const pdf = "./Let Us C by Yashavant Kanetkar.pdf";

async function index() {
  const loader = new PDFLoader(pdf);
  const docs = await loader.load();

  const embeddings = new OpenAIEmbeddings({
    model: "text-embedding-3-small",
  });

  const vectorStore = await QdrantVectorStore.fromExistingCollection(
    embeddings,
    {
        url:'http://localhost:6333',
        collectionName:'langchainjs-testing',
    }
  );
  await vectorStore.addDocuments(docs);
  console.log('All docs are added to the vector')
}
