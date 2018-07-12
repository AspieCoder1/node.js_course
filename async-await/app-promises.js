const users = [{
	id: 1,
	name: 'Andrew',
	schoolId: 101
}, {
	id: 2,
	name: 'Jessica',
	schoolId: 999
}];

const grades = [{
	id: 1,
	schoolId: 101,
	grade: 86
}, {
	id: 2,
	schoolId: 999,
	grade: 100
}, {
	id: 3,
	schoolId: 101,
	grade: 80
}];

const getUser = (id) => {
	return new Promise((resolve, reject) => {
		const user = users.find((user) => user.id === id);

		if (user) {
			resolve(user);
		} else {
			reject(`Unable to find user with id of ${id}.`);
		}
	});
};

const getGrades = (schoolId) => {
	return new Promise((resolve) => {
		resolve(grades.filter((grade) => grade.schoolId === schoolId));
	});
};

const getStatus = async (userId) => {
	const user = await getUser(userId);
	const grade = await getGrades(user.schoolId);
	let average = 0;
	if (user) {
		average = grade.map((grade) => grade.grade).reduce((a, b) => a + b) / grade.length;
	}
	return `${user.name} has a ${average}% in the class.`;
};

getStatus(2).then((status) => {
	console.log(status);
});