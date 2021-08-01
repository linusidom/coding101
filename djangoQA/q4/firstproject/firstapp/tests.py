from django.http import request, response
from django.test import TestCase
from firstapp.models import Post
# Create your tests here.
from django.contrib.auth import get_user_model
from django.urls.base import reverse

User = get_user_model()


class UserModelTest(TestCase):

    username = 'asdf'
    password = 'asdfasdfasdf'


    def setUp(self):
        # Every test needs access to the request factory.
        self.user = User.objects.create_user(username=self.username, password=self.password)
    
    def test_user_is_valid(self):
        
        title = 'new Title From test'
        
        self.client.login(username=self.username, password=self.password)
        response = self.client.post('http://127.0.0.1:8000/create', {
            'user':self.client,
            'title':title
        })
        post = Post.objects.all().first()
        self.assertEqual(post.title, title)
        self.assertEqual(post.user, self.user)

        self.assertEqual(response.status_code, 302)
    
    def test_user_is_NOT_valid(self):
        response = self.client.get('http://127.0.0.1:8000/create')
        self.assertEqual(response.status_code, 302)

    # Your Code Refactored
    # @pytest.mark.django_db
    def test_add_patient(self):
        
        patient_data = 'Your Patient data / self.patient data if defined above'
        
        # Login the client in the test
        self.client.login(username=self.username, password=self.password)
        
        # using the client, self.client, make the POST request
        response = self.client.post('http://127.0.0.1:8000/patient/add_new', {
            'patient_data': patient_data
        })

        # Get the data from the object
        patient = Patient.objects.all().first()

        # Assertion tests
        self.assertEqual(patient.patient_data, patient_data)
        self.assertEqual(patient.count(), 1)
        self.assertEqual(patient.user, self.user)

    
        # LoginUser = login_user();
        # client.force_login(LoginUser)
        # patient = Patient
        # assert patient.objects.count() == 0
        # AddNewPatientURL = urls.reverse('Patient:AddNew')
        # resp = client.post(AddNewPatientURL, patient_data)