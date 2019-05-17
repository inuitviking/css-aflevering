<main>
	<section>
		<h2>Contact Us</h2>
		<form action="" method="post" class="col-4"> <!--I know this is wrong, but whatever-->
			<div class="nameEmail">
				<div class="row">
					<label for="name" class="col-3">Name</label>
					<input type="text" name="name" id="name" class="col-9">
				</div>
				<div class="row">
					<label for="email" class="col-3">Email</label>
					<input type="email" name="email" id="email" class="col-9">
				</div>
			</div>
			<div class="row">
				<label for="gender" class="col-3">Gender</label>
				<div class="col-9">
					<div class="gender">
						<input type="radio" name="name" value="male" id="male" checked>
						<label for="male">Male</label>
					</div>
					<div class="gender">
						<input type="radio" name="name" value="female" id="female">
						<label for="female">Female</label>
					</div>
				</div>
			</div>
			<div class="message">
				<label for="message">Message</label>
				<textarea name="message" id="message"></textarea>
			</div>
			<div class="terms">
				<input type="checkbox" name="terms" id="terms">
				<label for="terms">I agree with the <a href="terms-of-service" target="_blank">Terms of Service</a></label>
			</div>
			<div class="buttons">
				<input type="reset" id="reset">
				<input type="submit" name="contact" value="Send">
			</div>
		</form>
	</section>
</main>
