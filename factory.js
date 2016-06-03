const Dog = () => {
    const sound = "woof";

    return {
        talk: () => console.log(sound);
    };
};

const sniffles = Dog();
sniffles.talk();


const Cat = (name, sound) => {
    return {
        talk: () => console.log(`${name} makes sound ${sound}`);
    };
};

const felix = Cat('Felix', 'meow');
felix.talk();