# Contribution Guidelines

Hi! We're glad to see that you're considering contributing to this project. From bug reports to helping to develop completely new features, your contributions are the backbone of any open source project, and ours is no different. 

Every contribution to this file follows the same process, and this file is here to walk you through that process so you know what to do and how to do it.

## Issues
Every contribution you make in this reposititory will start with an issue. Despite the name, issues are also a way for you to ask questions, provide feedback, and suggest features, in addition to letting us know about bugs. Once an issue is filed, the community can discuss it, providing additional information about a bug, explaining how a new feature you suggested would also be useful to them, or making any number of meaningful contributions to the conversation. **Whenever possible, you should use a template to create an issue.**

### Types of Issues by Color
#### Red: `bug`
Issues with red labels require action ASAP. We're either already working on confirming the existence of or finding a solution to the bug or actively looking for someone to develop a fix. The community is invited to share their experience, if any, with the bug described in the issue and provide additional information that they believe may be useful to the person fixing the bug. Please refrain from adding new comments unless you have additional information to add. If you want to share that you encountered the same issue, a :+1: reaction will suffice. This helps us keep the conversation regarding the issue easy to navigate so that it can be referenced when a solution is being developed. If there is nobody assigned to an issue with a red label and you think you can help, let us know and we'll likely assign it to you or ask you to provide feedback and support to the eventual assignee of the issue.

#### Orange: `help wanted`
Issues with orange labels are bugs that we're having a hard time solving or features that we don't know how to implement. If you have the expertise necessary to resolve an issue with an orange label, let us know and we'll assign it to you or ask you to provide feedback and support to the person working on the issue. *Note: Orange labels indicate that we need help with an issue, even if there's already somebody assigned to it.* If you are having trouble soving an issue that's assigned to you, let us know and we'll add this label.

#### Yellow: `feature`
Issues with yellow labels are new features that we're planning on implementing in the future. The community is invited to post suggestions and feedback regarding the implementation of the feature. If you believe that you are able to implement a new feature described in an issue without an assignee, let us know and we'll assign the issue to you or ask you to provide feedback and support to the person who ends up developing the feature.

#### Green: `good first issue`
Being beginners at this coding thing ourselves, we understand how scary it is to take on an issue for the first time. A little hesitancy is completely normal, and we want to help you overcome that by marking the issues that most beginners should be able to solve with a green label. If you're just starting out, look for green and see if it's an issue you're capable of solving. If you find out later that you're in over your head, let us know and we'll be happy to provide support or even assign the issue to someone else, if necessary. Issues with green labels that already have somebody assigned to them are unlikely to reqire additional people, but feel free to offer to help in the discussion so that we have a backup plan if something goes wrong.

#### Light Blue: `documentation`
If an issue has a blue label it most likely means we screwed up in our README.md or Wiki by not providing enough information. While we don't often need help resolving these issues, you're welcome to chime in to let us know what would be a better way to provide the necessary information in our documentation.

#### Dark Blue: `feedback`
Before we fix the bug, update the documentation, or add the feature described in the issue, we want your feedback on what the changes should look like in order to best support you as a developer and/or a podcaster. Feel free to react to comments you agree with using a :+1: or add your own feedback and ideas in a new comment, even if the issue already has an assignee. Issues with this label have a better outcome for everyone when we hear more from you and the rest of the community.

#### Pink-ish: `question`
Issues with this label are questions about how to use or contribute to the project. These are usually answered at the same time the label is applied, but you're welcome to share additional information or suggest that we answer the question in our documentation (if the issue doesn't already have a `documentation` label.

#### White: `duplicate`, `invalid`, and `won't fix`
Issues with white labels requre no action, although they might have useful information about a bug reported in another issue or the intended functionality of the player. If you disagree with on of these labels being applied to an issue, let us know and we'll review our decision.

### Open Issues
If an issue has comments from at least 1 project manager, has a label indicating additional action is needed, and does not currently have an assignee, it is considered an open issue. If you find an open issue that you can and want to solve, let us know in the conversation. We'll talk to you about our goals for resolving this issue (such as decribing the intended functionality of a new feature) and, if everything works out, we'll assign the issue to you. Once you have an issue assigned to you, you can move on the the next phase.

## Development
This is your time to shine! Create a fork of the project and get to work resolving the issue (although you are always welcome to ask for help in the original issue if you find you've bit off more than you can chew). We do have a couple rules about what you submit at the end, so you might want to look over our guidelines for pull requests before you get started to avoid having to go back and make additional changes to bring your code into compliance. The one request we have regarding this phase is that you resist the urge to make changes outside of the scope of the issue you are resolving (even if you are assigned to more than one issue, each issue should result in a separate pull request, and should therefore be resolved in a separate fork of the project. If you discover any bugs or have any new suggestions that are not related to the issue you are resolving, you should create a new issue so that we can review your feedback before suggesting changes. We will take steps to minimize change to the code that could invalidate ongoing development, including holding off on changes to the part of the code you're working on.

### Testing
Part of the development process is checking that your change has resolved the issue. Please test your code on as many devices and browsers as is convienent for you to ensure that:

1. The issue has been resolved to the full extent of your testing
2. Your modifications to the code do not cause any functional or aesthetic changes beyond those necessary to resolve the issue

Once you feel your code has met both of these requirements, you can move on to the next step.

## Pull Requests
Once you have finished the development process, it's time to add your code to the project. To do so, simply create a pull request with your fork. **Make sure you link to the original issue in your pull request. Pull requests that do not link to an existing issue will be ignored to avoid spam.** Once you have created a pull request, it will go through the following review process before being integrated into the main project.

### Pull Request Review Process
#### Feature Parity
Excluding the changes necessary to resolve the issue linked in your pull request, there should not be any funcitonal or aesthetic differences between the code in the master branch and your pull request. You are responsible for updating your code to reflect any changes that were made to the master branch during your devlopment process before creating a pull request. 

#### Branching
In many cases (especially when you are introducing new features), we will create a new branch and have you merge your file into that branch for additional testing. At this point, it is no longer necessary for you to be actively contributing to the review process, although it is your responsibility to resolve any issues that are discovered during this testing, so you should check for updates to both the original issue any pull requests that link to it regularly. Once your code is determined to be bug-free, we will merge the branch with the master branch and close the issue.

## Merging
Once your code has met all the requirements and any related bugs have been resolved, we will approve your pull request for merging. Usually, we will merge all pull requests into a new branch that will eventually be merged into the master branch for a new release. Once the original issue is marked as closed, your responsibility to complete all tasks related to that issue has ended, although this does not apply in cases where the issue is accidentally closed (such as when a pull request is merged into a new branch for testing and the bug is automatically closed).

---

As you can see, there are many ways to contribute to this project, regardless of your skill level. If you're just getting started, try creating an issue or resolving one of the issues with the `good first issue` label. If you have any questions regarding these guidelines, create an issue and we'll be happy to clarify.
