//project state management

class ProjectState {
    private listeners: any[] = [];
    private projects: any[] = [];
    private static instance: ProjectState;
    private constructor() {

    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }

    addListener(listenerFn: Function) {
        this.listeners.push(listenerFn);
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice())
        }
    }


    addProject(title: string, desription: string, numOfPeople: number) {
        const newProject = {
            id: Math.random().toString(),
            title: title,
            desription: desription,
            people: numOfPeople
        };
        this.projects.push(newProject);
    }

}

const projectState = ProjectState.getInstance()







//validation logic
interface Validatable {
    value: string | number;
    required: boolean;
    minlength?: number;
    maxlength?: number;
    min?: number;
    max?: number
}

function validate(validatableInput: Validatable) {
    let isValid = true;
    if (validatableInput.required) {

        isValid = isValid && validatableInput.value.toString().trim().length != 0;
    }
    if (validatableInput.minlength != null && typeof validatableInput.value == 'string') {
        isValid = isValid && validatableInput.value.length >= validatableInput.minlength;

    }
    if (validatableInput.maxlength != null && typeof validatableInput.value == 'string') {
        isValid = isValid && validatableInput.value.length <= validatableInput.maxlength;

    }

    //for number
    if (validatableInput.min != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value >= validatableInput.min;

    }
    if (validatableInput.max != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value <= validatableInput.max;

    }
    return isValid
}


//autobind decorator
function autobind(
    _: any,
    _2: string,
    descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;

};

//for rendering Lists
class ProjectList {

    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLElement;
    assignedProjects: any[];


    constructor(private type: 'active' | 'finished') {
        this.templateElement = document.getElementById(
            'project-list'
        )! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        this.assignedProjects = []
        const importedNode = document.importNode(
            this.templateElement.content,
            true
        );
        this.element = importedNode.firstElementChild as HTMLElement;
        this.element.id = `${this.type}-projects`;

        projectState.addListener((projects: any[]) => {
            this.assignedProjects = projects;
            this.renderProjects();
        });


        this.attach();
        this.renderContent();
    }
    private renderProjects() {

        const listEl = document.getElementById(`${this.type}-projects-list`)
        for(const prjItem of this.assignedProjects){
            const listItem = document.createElement('li');
            listItem.textContent = prjItem.title;
            listEl?.appendChild(listItem)
        }
    }
    private renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul')!.id = listId
        this.element.querySelector('h2')!.textContent =
            this.type.toUpperCase() + 'PROJECTS'
    }
    private attach() {
        this.hostElement.insertAdjacentElement('beforeend', this.element);

    }
}

//ProjectInput clas
class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        this.templateElement = document.getElementById(
            'project-input'
        )! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(
            this.templateElement.content,
            true
        );
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

        this.configure();
        this.attach();
    }


    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        const titleValidatable: Validatable = {
            value: enteredTitle,
            required: true
        };
        const descriptorValidatable: Validatable = {
            value: enteredDescription,
            required: true,
            minlength: 5
        };
        const peopleValidatable: Validatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5
        };


        //validating userinput
        if (
            !validate(titleValidatable) ||
            !validate(descriptorValidatable) ||
            !validate(peopleValidatable)
        ) {
            alert('invalid input,please try again!')
            return;
        }
        else {
            return [enteredTitle, enteredDescription, +enteredPeople]
        }

    }

    //for clear the inpit fields 
    private clearInput() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }

    @autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            projectState.addProject(title, desc, people)
            console.log(title, desc, people)
            this.clearInput()
        }
    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const prjInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');