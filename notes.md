````
docker run --name my-postgres -e POSTGRES_USER=myuser -e POSTGRES_PASSWORD=mypassword -p 5432:5432 -d postgres

``````
model Problem {
   id String @id @default(uuid())
   title String
   description String
   difficulty Difficulty
   tags String[] // ["tag1", "tag2", "tag3"]
   userId String
   examples  Json
   constraints String
   hints String?
   editorial String?

   testcases  Json // 
   codeSnippets Json
   referenceSolutions Json

   createdAt DateTime @default(now())
   updatedAt DateTime @updatedAt

  //  Relationship
  user  User    @relation(fields: [userId], references: [id] , onDelete: Cascade)
}
