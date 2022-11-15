// Original Stream doc

//import { Octokit } from "octokit";

// // Create a new octokit instance
// const octokit = new Octokit()

// const owner = "kjaymiller"
// const repo = "render_engine"

// // We'll need to define the types somewhere in Typescript
// // interface GHFile {
// //     name: string
// //     filename: string
// //     path_options: Array
// // }

// // interface GHFILES {
// //     GHFILE
// // }
// // Create a new mapper to provide cleaner names

// // const ghFiles = {
// //     code_of_conduct_file: {
// //             name: "Code of Conduct",
// //             filename: "CODE_OF_CONDUCT.md",
// //             path_options: ['./', '.github']
// //             },
// //     contributing: {
// //             name: "Contributing",
// //             filename: "CONTRIBUTING.md",
// //             path_options: ['./', '.github']
// //             },
// //     issue_template: {
// //             name: "Issue Template",
// //             filename: "template.md",
// //             path_options: ['.github/ISSUE_TEMPLATE/']
// //             },
// //     pull_request_template: {
// //             name: "Pull Request Template",
// //             filename: ".github/PULL_REQUEST_TEMPLATE/template.md",
// //             path_options: ['.github/PULL_REQUEST_TEMPLATE/']
// //             },
// //     license: {
// //             name: "License",
// //             filename: "LICENSE.md",
// //             path_options: ['./', '.github']
// //             },
// //     readme: {
// //             name: "Readme",
// //             filename: "README.md",
// //             path_options: ['./', '.github']
// //             }
// // }

// // Fetch the standards of the current repo
// async function getCommunityStandards(owner, repo){
//     const apiRequest = await octokit.rest.repos.getCommunityProfileMetrics({owner, repo})
//     return apiRequest 
// }


// // Retrieve the Missing Entries and return their cleaned up name
// const request = await getCommunityStandards(owner, repo).then(x => {
//     let missingEntries = Object.entries(ghFiles)
//     .filter(([key, value]) => !x.data.files[key])
//     return missingEntries
// })

// console.log(request.data)
// // console.log(`Your Health Score is ${request.data.health_percentage}`)
// // console.log("You're missing the following files:")
// // for (let message of missingEntries){
// //     console.log(`    - ${message} (Click to Fix!)`) 
// // }
