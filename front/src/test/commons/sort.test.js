import {
  sortItems
} from "../../../src/commons/index";
import {
  describe,
  expect,
  test
} from "@jest/globals";

const todos = [{
    id: 7,
    title: "dedezdez",
    description: null,
    isCompleted: false,
    createdAt: "2023-04-16T13:41:20.000Z",
    updatedAt: "2023-04-16T13:41:20.000Z",
  },
  {
    id: 8,
    title: "dedezdez",
    description: null,
    isCompleted: false,
    createdAt: "2023-04-16T13:41:21.000Z",
    updatedAt: "2023-04-16T13:41:21.000Z",
  },
  {
    id: 9,
    title: "mamawil",
    description: null,
    isCompleted: false,
    createdAt: "2023-04-16T16:03:33.000Z",
    updatedAt: "2023-04-16T16:03:33.000Z",
  },
  {
    id: 10,
    title: "dfdfdfdfdfssdfzaefzefzef",
    description: null,
    isCompleted: false,
    createdAt: "2023-04-16T16:09:01.000Z",
    updatedAt: "2023-04-16T16:09:01.000Z",
  },
  {
    id: 2,
    title: "test2",
    description: "oo",
    isCompleted: false,
    createdAt: "2023-04-16T12:18:20.000Z",
    updatedAt: "2023-04-16T16:20:52.000Z",
  },
  {
    id: 5,
    title: "test5",
    description: null,
    isCompleted: false,
    createdAt: "2023-04-16T12:44:46.000Z",
    updatedAt: "2023-04-16T16:20:54.000Z",
  },
  {
    id: 3,
    title: "test3",
    description: null,
    isCompleted: false,
    createdAt: "2023-04-16T12:18:31.000Z",
    updatedAt: "2023-04-16T16:20:55.000Z",
  },
  {
    id: 4,
    title: "test4",
    description: null,
    isCompleted: true,
    createdAt: "2023-04-16T12:44:40.000Z",
    updatedAt: "2023-04-16T13:37:06.000Z",
  },
  {
    id: 1,
    title: "test1",
    description: "vfdvdfvfdv56",
    isCompleted: true,
    createdAt: "2023-04-16T12:18:14.000Z",
    updatedAt: "2023-04-16T13:37:08.000Z",
  },
  {
    id: 6,
    title: "dedezdez",
    description: null,
    isCompleted: true,
    createdAt: "2023-04-16T13:37:12.000Z",
    updatedAt: "2023-04-16T16:20:49.000Z",
  },
];
const todoSorted = [{
    id: 7,
    title: "dedezdez",
    description: null,
    isCompleted: false,
    createdAt: "2023-04-16T13:41:20.000Z",
    updatedAt: "2023-04-16T13:41:20.000Z",
  },
  {
    id: 8,
    title: "dedezdez",
    description: null,
    isCompleted: false,
    createdAt: "2023-04-16T13:41:21.000Z",
    updatedAt: "2023-04-16T13:41:21.000Z",
  },
  {
    id: 9,
    title: "mamawil",
    description: null,
    isCompleted: false,
    createdAt: "2023-04-16T16:03:33.000Z",
    updatedAt: "2023-04-16T16:03:33.000Z",
  },
  {
    id: 10,
    title: "dfdfdfdfdfssdfzaefzefzef",
    description: null,
    isCompleted: false,
    createdAt: "2023-04-16T16:09:01.000Z",
    updatedAt: "2023-04-16T16:09:01.000Z",
  },
  {
    id: 2,
    title: "test2",
    description: "oo",
    isCompleted: false,
    createdAt: "2023-04-16T12:18:20.000Z",
    updatedAt: "2023-04-16T16:20:52.000Z",
  },
  {
    id: 5,
    title: "test5",
    description: null,
    isCompleted: false,
    createdAt: "2023-04-16T12:44:46.000Z",
    updatedAt: "2023-04-16T16:20:54.000Z",
  },
  {
    id: 3,
    title: "test3",
    description: null,
    isCompleted: false,
    createdAt: "2023-04-16T12:18:31.000Z",
    updatedAt: "2023-04-16T16:20:55.000Z",
  },
  {
    id: 4,
    title: "test4",
    description: null,
    isCompleted: true,
    createdAt: "2023-04-16T12:44:40.000Z",
    updatedAt: "2023-04-16T13:37:06.000Z",
  },
  {
    id: 1,
    title: "test1",
    description: "vfdvdfvfdv56",
    isCompleted: true,
    createdAt: "2023-04-16T12:18:14.000Z",
    updatedAt: "2023-04-16T13:37:08.000Z",
  },
  {
    id: 6,
    title: "dedezdez",
    description: null,
    isCompleted: true,
    createdAt: "2023-04-16T13:37:12.000Z",
    updatedAt: "2023-04-16T16:20:49.000Z",
  },
];

describe("Filter function", () => {
  test("sortItems of todos", () => {
    expect(sortItems(todos)).toEqual(todoSorted);
  });
});