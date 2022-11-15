import { Octokit } from "octokit";

// Create a new octokit instance
const octokit = new Octokit()

const owner = "kjaymiller"
const repo = "render_engine"

// We'll need to define the types somewhere in Typescript
// interface GHFile {
//     name: string
//     filename: string
//     path_options: Array
// }

// interface GHFILES {
//     GHFILE
// }
// Create a new mapper to provide cleaner names

const ghFiles = {
    code_of_conduct_file: {
            name: "Code of Conduct",
            filename: "CODE_OF_CONDUCT.md",
            path_options: ['./', '.github']
            },
    contributing: {
            name: "Contributing",
            filename: "CONTRIBUTING.md",
            path_options: ['./', '.github']
            },
    issue_template: {
            name: "Issue Template",
            filename: "template.md",
            path_options: ['.github/ISSUE_TEMPLATE/']
            },
    pull_request_template: {
            name: "Pull Request Template",
            filename: ".github/PULL_REQUEST_TEMPLATE/template.md",
            path_options: ['.github/PULL_REQUEST_TEMPLATE/']
            },
    license: {
            name: "License",
            filename: "LICENSE.md",
            path_options: ['./', '.github']
            },
    readme: {
            name: "Readme",
            filename: "README.md",
            path_options: ['./', '.github']
            }
}

// Fetch the standards of the current repo
async function getCommunityStandards(owner, repo){
    const apiRequest = await octokit.rest.repos.getCommunityProfileMetrics({owner, repo})
    return apiRequest 
}




// Retrieve the Missing Entries and return their cleaned up name

const request = await getCommunityStandards(owner, repo).then(x => {
    let missingEntries = Object.entries(ghFiles)
    .filter(([key, value]) => !x.data.files[key])
    return missingEntries
})

console.log(request)
// console.log(request)
// console.log(`Your Health Score is ${request.data.health_percentage}`)
// console.log("You're missing the following files:")
// for (let message of missingEntries){
//     console.log(`    - ${message} (Click to Fix!)`) 
// }


// const request={
//     status: 200,
//     url: 'https://api.github.com/repos/github-community-standards/github-community-standards/community/profile',
//     headers: {
//       'accept-ranges': 'bytes',
//       'access-control-allow-origin': '*',
//       'access-control-expose-headers': 'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset',
//       'cache-control': 'public, max-age=60, s-maxage=60',
//       connection: 'close',
//       'content-encoding': 'gzip',
//       'content-length': '471',
//       'content-security-policy': "default-src 'none'",
//       'content-type': 'application/json; charset=utf-8',
//       date: 'Tue, 08 Nov 2022 17:58:05 GMT',
//       etag: 'W/"41326465abdb756f0f319532380949136f4bf7f02400201de6b59fe0481bda81"',
//       'referrer-policy': 'origin-when-cross-origin, strict-origin-when-cross-origin',
//       server: 'GitHub.com',
//       'strict-transport-security': 'max-age=31536000; includeSubdomains; preload',
//       vary: 'Accept, Accept-Encoding, Accept, X-Requested-With',
//       'x-content-type-options': 'nosniff',
//       'x-frame-options': 'deny',
//       'x-github-media-type': 'github.v3; format=json',
//       'x-github-request-id': 'DE82:0A04:4193BA:85C087:636A98AD',
//       'x-ratelimit-limit': '60',
//       'x-ratelimit-remaining': '48',
//       'x-ratelimit-reset': '1667931350',
//       'x-ratelimit-resource': 'core',
//       'x-ratelimit-used': '12',
//       'x-xss-protection': '0'
//     },
//     data: {
//       health_percentage: 62,
//       description: 'Checks the community standards of your project when you open the repo',
//       documentation: null,
//       files: {
//         code_of_conduct: [Object],
//         code_of_conduct_file: [Object],
//         contributing: null,
//         issue_template: null,
//         pull_request_template: null,
//         license: [Object],
//         readme: [Object]
//       },
//       updated_at: '2022-11-08T17:13:43Z',
//       content_reports_enabled: false
//     }
//   }

// // let files = Object.fromEntries(
// //     Object.entries(request.data.files)
// //     .filter(([key, value]) => value === null)
// //     )

//    gcs()
// console.log(apiRequest)