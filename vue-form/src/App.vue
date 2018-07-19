<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
								<!-- v-model="userData.email" -->
                        <input
                                type="text"
                                id="email" 
								:value="userData.email"
								@input="userData.email = $event.target.value"
                                class="form-control">  
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                type="password"
                                id="password"
								v-model.lazy="userData.password"
                                class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                                type="number"
                                id="age"
								v-model.number="userData.age"
                                class="form-control">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                            id="message"
                            rows="5"
							v-model="message"
							style="white-space: pre"
                            class="form-control"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                    type="checkbox"
                                    id="sendmail"
									v-model="sendMail"
                                    value="SendMail"> Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                    type="checkbox"
                                    id="sendInfomail"
									v-model="sendMail"
                                    value="SendInfoMail"> Send Infomail
                        </label>
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                    <label for="male">
                        <input
                                type="radio"
                                id="male"
								v-model="gender"
                                value="Male"> Male
                    </label>
                    <label for="female">
                        <input
                                type="radio"
                                id="female"
								v-model="gender"
                                value="Female"> Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
							v-model="selectedPriority"
							>
                        <option v-for="(option, index) in priorities"
						 	:key="index"
						  	:selected="option === 'Medium'"
						  >{{ option }}</option>
                    </select>
                </div>
            </div>
            <hr>
			<div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                   <appSwitch v-model="dataSwitch"></appSwitch>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <button
                            class="btn btn-primary" @click.prevent="submitted">Submit!
                    </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Mail: {{ userData.email }} </p>
                        <p>Password: {{ userData.password }} </p>
                        <p>Age: {{ userData.age }} </p>
                        <p>Message: {{ message }} </p>
                        <p><strong>Send Mail?</strong></p>
                        <ul>
                            <li v-for="(item,index) in sendMail" :key="index">{{ item }}</li>
                        </ul>
                        <p>Gender: {{ gender }}</p>
                        <p>Priority: {{ selectedPriority }} </p>
                        <p>Switched: {{ dataSwitch }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Switch from './Switch.vue';
export default {
	data() {
		return {
			userData: {
				email: '',
				password: '',
				age: 27,
			},
			message: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum',
			sendMail: [],
			gender: 'Male',
			selectedPriority: 'High',
			priorities: ['High', 'Medium', 'Low'],
			dataSwitch: true,
			isSubmitted: false,
		};
	},
	components: {
		appSwitch: Switch,
	},
	methods: {
		submitted() {
			this.isSubmitted = true;
		},
	},
};
</script>

<style>
</style>
