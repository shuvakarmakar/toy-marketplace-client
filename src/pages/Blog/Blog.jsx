import useTitle from "../../hook/useTitle";
import Footer from "../Home/Shared/Footer/Footer";
import Navbar from "../Home/Shared/Navbar/Navbar";

const Blog = () => {
    // Dynamic Url
    useTitle("Blogs || Super Kiddo");
    
    return (
        <>
            <Navbar></Navbar>
            <div id='pdf-container'>
                <div className='card p-10'>
                    <p className='text-lg font-bold'>Question 1 : What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                    <p className='text-justify mt-4'><span className='font-bold'>Answer : </span>
                        An access token and refresh token are commonly used in authentication systems. Here's a concise explanation of what they are and how they work:
                        <br />
                        <span className="font-bold">1. Access Token:</span> An access token is a credential that is used to authorize and authenticate a user's access to protected resources (e.g., APIs or web services). It is usually short-lived and includes information about the user and their permissions.
                        <br />
                        <span className="font-bold">2. Refresh Token: </span>A refresh token is a long-lived credential that is used to obtain a new access token once the previous one expires. It is typically issued along with the access token and is stored securely by the client.
                        <br />
                        The workflow typically involves these steps:
                        <br />
                        i.Authentication: The user provides their credentials (e.g., username and password) to the authentication server.
                        <br />
                        ii.Token Issuance: The server verifies the credentials and, if valid, issues both an access token and a refresh token.
                        <br />
                        iii.Access Token Usage: The client includes the access token in API requests as an authorization header or parameter to access protected resources.
                        <br />
                        iv.Token Expiration: The access token has a limited lifespan (shorter for enhanced security), after which it becomes invalid.
                        <br />
                        v.Token Refresh: If the access token expires, the client uses the refresh token to request a new access token from the authentication server.
                        <br />
                        vi.Token Rotation: The authentication server verifies the refresh token, and if valid, issues a new access token while also providing a new refresh token for future use.
                        <br />
                        vii.Repeat: The client continues to use the new access token for subsequent API requests, and the process repeats when the access token expires.
                    </p>

                    <p className='text-lg font-bold mt-5'>Question 2 : Compare SQL and NoSQL databases?</p>

                    <p className='text-justify mt-4'><span className='font-bold'>Answer : </span>SQL and NoSQL are two different types of database management systems. Here's a concise comparison between SQL and NoSQL databases:</p>
                    <br />
                    <span className="font-bold">SQL Databases:</span>
                    <br />
                    i.Structure: SQL databases are based on a structured schema that defines the tables, columns, and relationships between data entities. They follow a rigid structure with predefined schemas.
                    <br />
                    ii.Data Model: SQL databases use the relational data model, where data is organized into tables with rows and columns. Relationships between tables are established using primary and foreign keys.
                    <br />
                    iii.Query Language: SQL databases use Structured Query Language (SQL) for querying and manipulating data. SQL provides a standardized syntax for performing complex queries and transactions.
                    <br />
                    iv.Scalability: SQL databases typically offer vertical scalability, which means they can handle increased loads by scaling up the hardware resources of a single server. They often have limitations when it comes to horizontal scalability and distributing data across multiple servers.
                    <br />
                    v.ACID Compliance: SQL databases adhere to the ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data integrity and reliability.
                    <br />
                    vi.Examples: MySQL, PostgreSQL, Oracle Database, Microsoft SQL Server.
                    <br />
                    <br />
                    <span className="font-bold">NoSQL Databases:</span>
                    <br />
                    i.Structure: NoSQL databases have a flexible schema, allowing for dynamic and schema-less data models. They can handle unstructured or semi-structured data.
                    <br />
                    ii.Data Model: NoSQL databases support various data models, such as key-value, document, columnar, and graph. Each model offers different ways to organize and query data, catering to specific use cases.
                    <br />
                    iii.Query Language: NoSQL databases may have their own query languages, although some also provide SQL-like query capabilities. The query languages are often optimized for specific data models and use cases.
                    <br />
                    iv.Scalability: NoSQL databases excel in horizontal scalability, allowing for distributing data across multiple servers or clusters. They can handle large volumes of data and high read/write workloads.
                    <br />
                    v.ACID Compliance: NoSQL databases may sacrifice strict ACID compliance in favor of higher scalability and performance. They often prioritize eventual consistency or provide tunable consistency models.
                    <br />
                    vi.Examples: MongoDB (document store), Cassandra (columnar store), Redis (key-value store), Neo4j (graph database).

                    <p className='text-lg font-bold mt-5'>Question 3 :  What is express js? What is Nest JS?</p>
                    <p className='text-justify mt-4'><span className='font-bold'>Answer : </span>Express.js and Nest.js are both web application frameworks that run on top of Node.js. Here's a concise explanation of each:</p>
                    <br />
                    <p><span className="font-bold">Express.js:</span>
                        <br />
                        i.Express.js is a minimalist and flexible web application framework for Node.js. It provides a set of features and utilities to build web applications and APIs quickly and easily.
                        <br />
                        ii.It offers a straightforward, unopinionated approach to web development, allowing developers to have fine-grained control over their application's structure and behavior.
                        <br />
                        iii.Express.js provides a robust routing system, middleware support for handling requests and responses, and integration with various template engines for rendering dynamic views.
                        <br />
                        iv.It has a large and active community with a vast ecosystem of plugins and extensions, making it highly extensible and adaptable to different use cases.</p>
                    <br />
                    <p><span className="font-bold">Nest.js:</span>
                        <br />
                        i.Nest.js is a progressive, opinionated web application framework for Node.js, heavily inspired by Angular's architecture and concepts.
                        <br />
                        ii.It aims to provide a structured and scalable approach to building server-side applications by promoting the use of TypeScript, decorators, and dependency injection.
                        <br />
                        iii.Nest.js leverages decorators to define modules, controllers, services, and other components, making it easy to organize and modularize your application.
                        <br />
                        iv.It integrates well with other libraries and frameworks commonly used in the Node.js ecosystem, such as Express.js, allowing developers to combine the benefits of Nest.js with existing tools.</p>
                    <br />
                    v.Nest.js provides features like built-in support for dependency injection, powerful routing system, middleware support, and various other utilities to simplify common development tasks.
                    <br />

                    <p className='text-lg font-bold mt-5'>Question 4 : What is MongoDB aggregate and how does it work?
                    </p>
                    <p className='text-justify mt-4'><span className='font-bold'>Answer : </span>In MongoDB, the aggregate method is used to perform advanced data aggregation operations on collections. It allows you to process and transform data in various ways, including grouping, filtering, sorting, and applying complex computations.
                        <br />
                        Here's a concise explanation of how the aggregate method works:
                        <br />
                        <span className="font-bold">Pipeline Stages:</span> The aggregate method takes an array of pipeline stages as input. Each stage represents a specific operation to be applied to the data. The stages are processed sequentially, with the output of one stage serving as the input for the next stage.
                        <br />
                        <span className="font-bold">Pipeline Operators:</span> Within each stage, you can use different pipeline operators to define the desired data transformation. Some common operators include:

                        $match: Filters documents based on specified conditions.
                        $group: Groups documents together based on a specified key and performs aggregations on grouped data.
                        $project: Reshapes the documents by specifying which fields to include or exclude.
                        $sort: Sorts the documents based on specified criteria.
                        $limit and $skip: Controls the number of documents to return or skip.
                        $lookup: Performs a join operation between multiple collections.
                        <br />
                        <span className="font-bold">Data Transformation:</span> As the pipeline stages are processed, the input documents are passed through each stage, and the specified operations are applied. Each stage modifies the data or reduces the result set based on the specified criteria.
                        <br />
                        Result: The final result of the aggregation is returned as a cursor or an array, depending on the chosen output mode. The result can be further processed or utilized as needed in your application.
                    </p>
                    <br />
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Blog;